import { useEffect, useState } from 'react'

export function useCollection<T = any>(collectionName: string, orderField?: string) {
	const [data, setData] = useState<T[] | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		let unsub: (() => void) | null = null
		let cancelled = false
		async function run() {
			try {
				// Prefer REST API if available
				const api = (import.meta as any).env?.VITE_API_URL || 'http://localhost:4000'
				const res = await fetch(`${api}/api/${collectionName}`).catch(() => null as any)
				if (res && res.ok) {
					const json = await res.json()
					if (!cancelled) {
						setData(json as T[])
						setLoading(false)
					}
					return
				}
				// If no API, mark as loaded and let static fallback render
				if (!cancelled) setLoading(false)
			} catch (e: any) {
				if (!cancelled) {
					setError(e?.message || 'Failed to load data')
					setLoading(false)
				}
			}
		}
		run()
		return () => {
			cancelled = true
			if (unsub) unsub()
		}
	}, [collectionName, orderField])

	return { data, loading, error }
}


