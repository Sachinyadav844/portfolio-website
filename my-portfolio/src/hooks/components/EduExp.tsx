import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiBook, FiBriefcase, FiChevronDown } from 'react-icons/fi'

type Edu = { title: string; org: string; years: string; details: string }
type Exp = { title: string; org: string; years: string; details: string }

const education: Edu[] = [
	{ title: 'B.Tech in Computer Science and Engineering', org: 'Nitra Technical Campus', years: '2023 – 2027', details: 'Foundations of CS, Data Structures & Algorithms, Databases, and AI. Actively building projects in Data Science and Machine Learning; participating in hackathons and coding competitions.' },
]

const experience: Exp[] = [
	{ title: 'Data Science Intern', org: 'AI Labs (Remote)', years: '2024', details: 'Built ML prototypes, cleaned datasets, and delivered dashboards for POCs.' },
]

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1
		}
	}
}

const sectionVariants = {
	hidden: { opacity: 0, y: 30, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: "easeOut"
		}
	}
}

const contentVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut"
		}
	}
}

export function EduExp() {
	const [open, setOpen] = useState<'edu' | 'exp' | null>('edu')
	const toggle = (key: 'edu' | 'exp') => setOpen(prev => (prev === key ? null : key))

	return (
		<motion.div 
			className="grid lg:grid-cols-2 gap-6"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<motion.section 
				variants={sectionVariants}
				className="card p-5 group hover:shadow-xl transition-all duration-300"
			>
				<motion.button 
					className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
					onClick={() => toggle('edu')} 
					aria-expanded={open === 'edu'}
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
				>
					<span className="flex items-center gap-3 font-semibold text-lg">
						<motion.div 
							className="p-2 rounded-full bg-brand/10 text-brand"
							whileHover={{ rotate: 360 }}
							transition={{ duration: 0.6 }}
						>
							<FiBook className="text-xl" />
						</motion.div>
						Education
					</span>
					<motion.div
						animate={{ rotate: open === 'edu' ? 180 : 0 }}
						transition={{ duration: 0.3 }}
					>
						<FiChevronDown className="text-xl" />
					</motion.div>
				</motion.button>
				
				<AnimatePresence initial={false}>
					{open === 'edu' && (
						<motion.div 
							initial={{ height: 0, opacity: 0 }} 
							animate={{ height: 'auto', opacity: 1 }} 
							exit={{ height: 0, opacity: 0 }} 
							transition={{ duration: 0.4, ease: "easeInOut" }}
							className="overflow-hidden"
						>
							<motion.div 
								className="mt-4 space-y-4"
								variants={containerVariants}
								initial="hidden"
								animate="visible"
							>
								{education.map((e, index) => (
									<motion.div 
										key={e.title} 
										variants={contentVariants}
										className="rounded-lg border border-slate-200 dark:border-slate-700 p-4 group/item hover:border-brand/50 hover:shadow-md transition-all duration-300"
									>
										<motion.div 
											className="flex items-center justify-between mb-2"
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
										>
											<h4 className="font-medium text-lg group-hover/item:text-brand transition-colors">{e.title}</h4>
											<motion.span 
												className="text-sm text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full"
												initial={{ scale: 0 }}
												animate={{ scale: 1 }}
												transition={{ delay: index * 0.1 + 0.4, duration: 0.3 }}
											>
												{e.years}
											</motion.span>
										</motion.div>
										<motion.p 
											className="text-sm text-slate-600 dark:text-slate-300 font-medium mb-2"
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
										>
											{e.org}
										</motion.p>
										<motion.p 
											className="text-slate-600 dark:text-slate-300 leading-relaxed"
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
										>
											{e.details}
										</motion.p>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.section>

			<motion.section 
				variants={sectionVariants}
				className="card p-5 group hover:shadow-xl transition-all duration-300"
			>
				<motion.button 
					className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
					onClick={() => toggle('exp')} 
					aria-expanded={open === 'exp'}
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
				>
					<span className="flex items-center gap-3 font-semibold text-lg">
						<motion.div 
							className="p-2 rounded-full bg-brand/10 text-brand"
							whileHover={{ rotate: 360 }}
							transition={{ duration: 0.6 }}
						>
							<FiBriefcase className="text-xl" />
						</motion.div>
						Experience
					</span>
					<motion.div
						animate={{ rotate: open === 'exp' ? 180 : 0 }}
						transition={{ duration: 0.3 }}
					>
						<FiChevronDown className="text-xl" />
					</motion.div>
				</motion.button>
				
				<AnimatePresence initial={false}>
					{open === 'exp' && (
						<motion.div 
							initial={{ height: 0, opacity: 0 }} 
							animate={{ height: 'auto', opacity: 1 }} 
							exit={{ height: 0, opacity: 0 }} 
							transition={{ duration: 0.4, ease: "easeInOut" }}
							className="overflow-hidden"
						>
							<motion.div 
								className="mt-4 space-y-4"
								variants={containerVariants}
								initial="hidden"
								animate="visible"
							>
								{experience.map((x, index) => (
									<motion.div 
										key={x.title} 
										variants={contentVariants}
										className="rounded-lg border border-slate-200 dark:border-slate-700 p-4 group/item hover:border-brand/50 hover:shadow-md transition-all duration-300"
									>
										<motion.div 
											className="flex items-center justify-between mb-2"
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
										>
											<h4 className="font-medium text-lg group-hover/item:text-brand transition-colors">{x.title}</h4>
											<motion.span 
												className="text-sm text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full"
												initial={{ scale: 0 }}
												animate={{ scale: 1 }}
												transition={{ delay: index * 0.1 + 0.4, duration: 0.3 }}
											>
												{x.years}
											</motion.span>
										</motion.div>
										<motion.p 
											className="text-sm text-slate-600 dark:text-slate-300 font-medium mb-2"
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
										>
											{x.org}
										</motion.p>
										<motion.p 
											className="text-slate-600 dark:text-slate-300 leading-relaxed"
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
										>
											{x.details}
										</motion.p>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.section>
		</motion.div>
	)
}


