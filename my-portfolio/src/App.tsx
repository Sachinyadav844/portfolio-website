import { useEffect, useState } from 'react'
import { Navbar, SectionId } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Timeline } from './components/Timeline'
import { EduExp } from './components/EduExp'
import { Achievements } from './components/Achievements'
import { Contact } from './components/Contact'

function useDarkModeSync() {
	const [isDark, setIsDark] = useState<boolean>(() => {
		return (
			localStorage.getItem('theme') === 'dark' ||
			(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
		)
	})
	useEffect(() => {
		const root = document.documentElement
		if (isDark) {
			root.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else {
			root.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		}
	}, [isDark])
	return { isDark, setIsDark }
}

export default function App() {
	const { isDark, setIsDark } = useDarkModeSync()
	const [active, setActive] = useState<SectionId>('home')
	return (
		<div>
			<Navbar isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} activeSection={active} onSelect={setActive} />
			<main className="section">
				{active === 'home' && <Hero />}
				{active === 'skills' && <Skills />}
				{active === 'projects' && <Projects />}
				{active === 'achievements' && <Achievements />}
				{active === 'education' && <><Timeline /><div className="mt-8"><EduExp /></div></>}
				{active === 'about' && <About />}
				{active === 'contact' && <Contact />}
			</main>
		</div>
	)
}
