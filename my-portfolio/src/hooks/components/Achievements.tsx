import { motion } from 'framer-motion'

type Achievement = { title: string; event: string; year: string; description: string }

const achievements: Achievement[] = [
	{ title: 'Winner - Web Hackathon', event: 'DevFest', year: '2024', description: 'Built a realtime collaborative editor with React + Firebase.' },
	{ title: 'Runner-up - ML Challenge', event: 'AI Sprint', year: '2023', description: 'Created a prediction pipeline and dashboard.' },
	{ title: 'Top 5 - UI Design', event: 'Design Jam', year: '2022', description: 'Designed a mobile-first app with animations.' },
]

export function Achievements() {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-6">Achievements</h2>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{achievements.map((a) => (
					<motion.div key={`${a.title}-${a.year}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card p-6">
						<h3 className="font-semibold">{a.title}</h3>
						<p className="text-sm text-slate-500">{a.event} • {a.year}</p>
						<p className="mt-2 text-slate-600 dark:text-slate-300">{a.description}</p>
					</motion.div>
				))}
			</div>
		</div>
	)
}


