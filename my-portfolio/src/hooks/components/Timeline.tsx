import { motion } from 'framer-motion'
import { FiBriefcase, FiBook } from 'react-icons/fi'

type Item = { type: 'work' | 'edu'; title: string; org: string; years: string; description: string }

const items: Item[] = [
	{ type: 'edu', title: 'B.Tech in Computer Science and Engineering', org: 'Your University', years: '2022 - Present', description: 'Core CS fundamentals, Data Science and Machine Learning focus.' },
	{ type: 'work', title: 'Data Science Intern', org: 'AI Labs (Remote)', years: '2024', description: 'Built ML prototypes and data visualizations for POCs.' },
]

export function Timeline() {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-6">Experience & Education</h2>
			<div className="relative pl-6">
				<div className="absolute left-2 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-700" />
				<div className="space-y-6">
					{items.map((it, i) => (
						<motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative">
							<div className="absolute -left-2 top-2 grid place-items-center w-4 h-4 rounded-full bg-brand text-white">
								{it.type === 'work' ? <FiBriefcase className="text-[10px]" /> : <FiBook className="text-[10px]" />}
							</div>
							<div className="card p-5">
								<div className="flex items-center justify-between">
									<h3 className="font-semibold">{it.title}</h3>
									<span className="text-sm text-slate-500 dark:text-slate-400">{it.years}</span>
								</div>
								<p className="text-sm text-slate-600 dark:text-slate-300">{it.org}</p>
								<p className="mt-2 text-slate-600 dark:text-slate-300">{it.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	)
}


