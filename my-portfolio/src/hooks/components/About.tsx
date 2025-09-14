import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiUser, FiCode, FiDatabase } from 'react-icons/fi'

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

const itemVariants = {
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

const iconVariants = {
	hidden: { scale: 0, rotate: -180 },
	visible: {
		scale: 1,
		rotate: 0,
		transition: {
			duration: 0.5,
			ease: "backOut"
		}
	}
}

export function About() {
	return (
		<motion.div 
			className="grid md:grid-cols-3 gap-6"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<motion.div 
				variants={itemVariants}
				className="md:col-span-2 card p-6 group hover:shadow-xl transition-all duration-300"
			>
				<motion.div 
					className="flex items-center gap-3 mb-4"
					variants={iconVariants}
				>
					<div className="p-2 rounded-full bg-brand/10 text-brand">
						<FiUser className="text-xl" />
					</div>
					<h2 className="text-2xl font-bold">About Me</h2>
				</motion.div>
				<motion.p 
					className="text-slate-600 dark:text-slate-300 leading-relaxed"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.8 }}
				>
					I'm Sachin Yadav, a passionate Data Science enthusiast and 3rd-year Computer Science student. I specialize in Python, Machine Learning, and turning raw data into meaningful insights. My goal is to become a Data Scientist who can contribute to impactful innovations in AI and analytics.
				</motion.p>
				
				<motion.div 
					className="mt-6 grid grid-cols-2 gap-4"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.6 }}
				>
					<div className="flex items-center gap-2 text-sm text-slate-500">
						<FiCode className="text-brand" />
						<span>Data Science</span>
					</div>
					<div className="flex items-center gap-2 text-sm text-slate-500">
						<FiDatabase className="text-brand" />
						<span>Machine Learning</span>
					</div>
				</motion.div>
			</motion.div>
			
			<motion.div 
				variants={itemVariants}
				className="card p-6 group hover:shadow-xl transition-all duration-300"
			>
				<motion.div 
					className="flex items-center gap-3 mb-4"
					variants={iconVariants}
				>
					<div className="p-2 rounded-full bg-brand/10 text-brand">
						<FiMail className="text-xl" />
					</div>
					<h3 className="font-semibold">Connect With Me</h3>
				</motion.div>
				<motion.ul 
					className="space-y-3"
					variants={containerVariants}
				>
					<motion.li variants={itemVariants}>
						<a 
							className="btn-ghost w-full justify-start gap-3 hover:scale-105 transition-transform" 
							target="_blank" 
							href="https://github.com/Sachinyadav844"
						>
							<FiGithub className="text-lg" />
							GitHub
						</a>
					</motion.li>
					<motion.li variants={itemVariants}>
						<a 
							className="btn-ghost w-full justify-start gap-3 hover:scale-105 transition-transform" 
							target="_blank" 
							href="https://www.linkedin.com/in/sachin-yadav-a5a3122a6"
						>
							<FiLinkedin className="text-lg" />
							LinkedIn
						</a>
					</motion.li>
					<motion.li variants={itemVariants}>
						<a 
							className="btn-ghost w-full justify-start gap-3 hover:scale-105 transition-transform" 
							target="_blank" 
							href="mailto:sachinyadavv4534@gmail.com"
						>
							<FiMail className="text-lg" />
							Email
						</a>
					</motion.li>
				</motion.ul>
			</motion.div>
		</motion.div>
	)
}
