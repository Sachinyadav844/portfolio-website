import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { SiPython, SiCplusplus, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiTableau } from 'react-icons/si'
import { useCollection } from '../hooks/useCollection'

type Skill = { name: string; level: number; Icon?: IconType; icon?: string }

const skills: Skill[] = [
	{ name: 'Python', level: 90, Icon: SiPython },
	{ name: 'DSA in C++', level: 80, Icon: SiCplusplus },
	{ name: 'Python Modules (NumPy)', level: 85, Icon: SiNumpy },
	{ name: 'Python Modules (Pandas)', level: 85, Icon: SiPandas },
	{ name: 'Machine Learning (scikit-learn)', level: 78, Icon: SiScikitlearn },
	{ name: 'Deep Learning (TensorFlow)', level: 70, Icon: SiTensorflow },
	{ name: 'Data Visualization (Tableau)', level: 75, Icon: SiTableau },
]

const iconsMap = {
	python: SiPython,
	cplusplus: SiCplusplus,
	numpy: SiNumpy,
	pandas: SiPandas,
	scikitlearn: SiScikitlearn,
	tensorflow: SiTensorflow,
	tableau: SiTableau,
} as const

export function Skills() {
	const { data, loading } = useCollection<Skill>('skills', 'level')
	const render = (data ?? skills)
	return (
		<div>
			<h2 className="text-2xl font-bold mb-6">Skills</h2>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{render.map((s) => {
					const Icon = (s.icon ? (iconsMap as any)[s.icon as keyof typeof iconsMap] : s.Icon) || SiPython
					const level = s.level ?? 70
					return (
						<motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card p-6">
							<div className="flex items-center gap-3 mb-3">
								<Icon className="text-2xl text-brand" />
								<span className="font-medium">{s.name}</span>
							</div>
							<div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
								<motion.div
									className="h-full bg-brand"
									initial={{ width: 0 }}
									whileInView={{ width: `${level}%` }}
									transition={{ duration: 1 }}
									viewport={{ once: true }}
								/>
							</div>
							<p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Proficiency: {level}%</p>
						</motion.div>
					)
				})}
			</div>
			{loading && <p className="mt-4 text-slate-500">Loading skills...</p>}
		</div>
	)
}
