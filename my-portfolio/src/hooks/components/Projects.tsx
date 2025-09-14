import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi'

type Project = {
	title: string
	description: string
	image: string
	technologies: string[]
	github: string
	live: string
}

const projects: Project[] = [
	{
		title: 'Movie Recommendation System',
		description: 'A content-based movie recommender inspired by Netflix that suggests similar titles using cosine similarity over TF-IDF of overviews and metadata.',
		image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop',
		technologies: ['Python', 'Pandas', 'scikit-learn', 'NLP'],
		github: 'https://github.com/Sachinyadav844/my-project',
		live: 'https://github.com/Sachinyadav844/my-project',
	},
	{
		title: 'Project Two',
		description: 'Data visualization dashboard with responsive charts and interactions.',
		image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
		technologies: ['React', 'D3', 'Framer Motion'],
		github: 'https://github.com/',
		live: 'https://example.com',
	},
	{
		title: 'Project Three',
		description: 'E-commerce front-end with smooth UX and clean architecture.',
		image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
		technologies: ['React', 'Zustand', 'Tailwind'],
		github: 'https://github.com/',
		live: 'https://example.com',
	},
]

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2
		}
	}
}

const projectVariants = {
	hidden: { opacity: 0, y: 40, scale: 0.9 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.7,
			ease: "easeOut"
		}
	}
}

const techVariants = {
	hidden: { opacity: 0, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.3,
			ease: "backOut"
		}
	}
}

export function Projects() {
	const [active, setActive] = useState<Project | null>(null)

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<motion.div 
				className="flex items-center gap-3 mb-8"
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6 }}
			>
				<div className="p-2 rounded-full bg-brand/10 text-brand">
					<FiGithub className="text-2xl" />
				</div>
				<h2 className="text-2xl font-bold">Featured Projects</h2>
			</motion.div>
			
			<motion.div 
				className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
				variants={containerVariants}
			>
				{projects.map((p, index) => (
					<motion.div 
						key={p.title} 
						variants={projectVariants}
						className="group card overflow-hidden hover:shadow-2xl transition-all duration-500"
						whileHover={{ y: -10, scale: 1.02 }}
					>
						<motion.div 
							className="aspect-video overflow-hidden relative"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
						>
							<img 
								src={p.image} 
								alt={p.title} 
								className="w-full h-full object-cover transition duration-500 group-hover:scale-110" 
							/>
							<motion.div 
								className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
								initial={{ opacity: 0 }}
								whileHover={{ opacity: 1 }}
							/>
							<motion.div 
								className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
								initial={{ scale: 0 }}
								whileHover={{ scale: 1 }}
								transition={{ delay: 0.1 }}
							>
								<button 
									className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
									onClick={() => setActive(p)}
								>
									<FiExternalLink className="text-lg" />
								</button>
							</motion.div>
						</motion.div>
						
						<motion.div 
							className="p-5 space-y-4"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
						>
							<h3 className="font-semibold text-lg group-hover:text-brand transition-colors">{p.title}</h3>
							<p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">{p.description}</p>
							
							<motion.div 
								className="flex flex-wrap gap-2"
								variants={containerVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
							>
								{p.technologies.map((t, techIndex) => (
									<motion.span 
										key={t} 
										variants={techVariants}
										className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-brand hover:text-white transition-colors duration-300"
									>
										{t}
									</motion.span>
								))}
							</motion.div>
							
							<motion.div 
								className="flex items-center gap-3 pt-2"
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
							>
								<a 
									href={p.github} 
									target="_blank" 
									className="btn-ghost text-sm hover:scale-105 transition-transform"
								>
									<FiGithub /> Code
								</a>
								<a 
									href={p.live} 
									target="_blank" 
									className="btn-ghost text-sm hover:scale-105 transition-transform"
								>
									<FiExternalLink /> Live
								</a>
								<button 
									className="btn-primary text-sm ml-auto hover:scale-105 transition-transform" 
									onClick={() => setActive(p)}
								>
									Details
								</button>
							</motion.div>
						</motion.div>
					</motion.div>
				))}
			</motion.div>

			<AnimatePresence>
				{active && (
					<motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						<motion.div className="card max-w-2xl w-full overflow-hidden" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}>
							<div className="relative">
								<img src={active.image} alt="" className="w-full aspect-video object-cover" />
								<button aria-label="Close" className="btn-ghost absolute top-3 right-3" onClick={() => setActive(null)}>
									<FiX />
								</button>
							</div>
							<div className="p-6 space-y-3">
								<h3 className="text-xl font-semibold">{active.title}</h3>
								<p className="text-slate-600 dark:text-slate-300">{active.description}</p>
								<div className="flex flex-wrap gap-2">
									{active.technologies.map(t => (
										<span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700">{t}</span>
									))}
								</div>
								<div className="flex items-center gap-3 pt-2">
									<a href={active.github} target="_blank" className="btn-ghost text-sm"><FiGithub /> Code</a>
									<a href={active.live} target="_blank" className="btn-ghost text-sm"><FiExternalLink /> Live</a>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	)
}
