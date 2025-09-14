import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const skills = ['Data Science Learner', 'Machine Learning Enthusiast', 'AI Explorer']

function useTyping(words: string[], speed = 100, pause = 1200) {
	const [index, setIndex] = useState(0)
	const [text, setText] = useState('')
	const [deleting, setDeleting] = useState(false)
	const timerRef = useRef<number | null>(null)

	useEffect(() => {
		const full = words[index]
		const tick = () => {
			if (!deleting) {
				setText(full.slice(0, text.length + 1))
				if (text.length + 1 === full.length) {
					timerRef.current = window.setTimeout(() => setDeleting(true), pause)
					return
				}
			} else {
				setText(full.slice(0, text.length - 1))
				if (text.length - 1 === 0) {
					setDeleting(false)
					setIndex((index + 1) % words.length)
					return
				}
			}
			const nextDelay = deleting ? speed / 2 : speed
			timerRef.current = window.setTimeout(tick, nextDelay)
		}
		timerRef.current = window.setTimeout(tick, speed)
		return () => {
			if (timerRef.current) window.clearTimeout(timerRef.current)
		}
	}, [text, deleting, index, words, speed, pause])

	return text
}

export function Hero() {
	const typed = useTyping(skills)
	return (
		<div className="relative flex flex-col-reverse lg:flex-row items-center gap-12">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				className="absolute inset-x-0 -top-20 h-52 pointer-events-none"
			>
				<div className="mx-auto max-w-7xl h-full container-px">
					<div className="h-full rounded-3xl bg-gradient-to-r from-brand/20 via-purple-500/20 to-pink-500/20" />
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="flex-1 space-y-6"
			>
				<p className="text-brand font-medium">Hi, I’m</p>
				<h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Sachin Yadav 👋</h1>
				<p className="text-slate-600 dark:text-slate-300">Turning raw data into meaningful insights and intelligent solutions.</p>
				<p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 h-8">
					<span className="align-bottom">{typed}</span>
					<span className="ml-0.5 border-r-2 border-brand animate-pulse" />
				</p>
				<div className="flex items-center gap-3">
					<a className="btn-primary" href="#projects">Explore Projects</a>
					<a className="btn-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
				</div>
				<div className="grid grid-cols-3 max-w-md gap-3 pt-6">
					<div className="card p-4 text-center">
						<p className="text-2xl font-bold">10+</p>
						<p className="text-sm text-slate-500">Projects</p>
					</div>
					<div className="card p-4 text-center">
						<p className="text-2xl font-bold">12+</p>
						<p className="text-sm text-slate-500">Skills</p>
					</div>
					<div className="card p-4 text-center">
						<p className="text-2xl font-bold">3</p>
						<p className="text-sm text-slate-500">Certs</p>
					</div>
				</div>

				{/* Hero showcase image */}
				<motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="pt-6">
					<img
						src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
						alt="Data science visualization"
						className="w-full max-w-2xl rounded-2xl shadow-lg"
					/>
				</motion.div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				whileInView={{ opacity: 1, scale: 1, rotate: [0, 2, -2, 0] }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="flex-1 flex justify-center"
			>
				<div className="relative w-64 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem]">
					<div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-brand via-fuchsia-500 to-purple-500 blur-2xl opacity-30" />
					<img
						src="/profile.png"
						alt="Profile"
						className="relative w-full h-full object-cover rounded-2xl lg:rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300 mask-portrait border-4 border-white/20 dark:border-slate-700/30"
					/>
				</div>
			</motion.div>
		</div>
	)
}
