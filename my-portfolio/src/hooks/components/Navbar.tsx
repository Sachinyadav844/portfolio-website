import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const navItems = [
	{ id: 'home', label: 'Home' },
	{ id: 'skills', label: 'Skills' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'achievements', label: 'Achievements' },
	{ id: 'education', label: 'Education' },
	{ id: 'about', label: 'About' },
	{ id: 'contact', label: 'Contact' },
]

export type SectionId = 'home' | 'skills' | 'projects' | 'achievements' | 'education' | 'about' | 'contact'

export function Navbar({ isDark, onToggleTheme, activeSection, onSelect }: { isDark: boolean; onToggleTheme: () => void; activeSection: SectionId; onSelect: (id: SectionId) => void }) {
	const [scrolled, setScrolled] = useState(false)
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10)
		onScroll()
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<header className={`fixed top-0 inset-x-0 z-50 transition ${scrolled ? 'backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/60 dark:border-slate-700/60' : ''}`}>
			<nav className="container-px max-w-7xl mx-auto flex items-center justify-between h-16">
				<div className="flex items-center gap-4">
					{/* Left-aligned Menu button */}
					<div className="relative group hidden md:block">
						<button className="btn-ghost">Menu</button>
						<div className="absolute hidden group-hover:block mt-2 w-56 card p-2">
							{navItems.map(item => (
								<button
									key={item.id}
									onClick={() => onSelect(item.id as SectionId)}
									className={`w-full text-left px-3 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 ${activeSection === (item.id as SectionId) ? 'text-brand' : ''}`}
								>
									{item.label}
								</button>
							))}
						</div>
					</div>
					<a href="#home" className="font-semibold">Portfolio</a>
				</div>
				<div className="hidden md:flex items-center gap-3">
					<button aria-label="Toggle theme" className="btn-ghost" onClick={onToggleTheme}>
						{isDark ? <FiSun /> : <FiMoon />}
					</button>
				</div>
				<div className="md:hidden flex items-center gap-2">
					<button className="btn-ghost" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav">
						<span className="block w-6 h-0.5 bg-current mb-1" />
						<span className="block w-6 h-0.5 bg-current mb-1" />
						<span className="block w-6 h-0.5 bg-current" />
					</button>
					<button aria-label="Toggle theme" className="btn-ghost" onClick={onToggleTheme}>
						{isDark ? <FiSun /> : <FiMoon />}
					</button>
				</div>
			</nav>
			{open && (
				<div id="mobile-nav" className="md:hidden container-px max-w-7xl mx-auto pb-4 space-y-2">
					{navItems.map(item => (
						<button
							key={item.id}
							onClick={() => { onSelect(item.id as SectionId); setOpen(false) }}
							className={`w-full text-left block py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 ${activeSection === (item.id as SectionId) ? 'text-brand' : ''}`}
						>
							{item.label}
						</button>
					))}
				</div>
			)}
		</header>
	)
}
