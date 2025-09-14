import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter, FiUser, FiMessageCircle } from 'react-icons/fi'

type FormState = { name: string; email: string; message: string }

const initial: FormState = { name: '', email: '', message: '' }

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

const inputVariants = {
	focus: { scale: 1.02, y: -2 },
	blur: { scale: 1, y: 0 }
}

export function Contact() {
	const [form, setForm] = useState<FormState>(initial)
	const [errors, setErrors] = useState<Partial<FormState>>({})
	const [submitted, setSubmitted] = useState(false)

	function validate(values: FormState) {
		const e: Partial<FormState> = {}
		if (!values.name.trim()) e.name = 'Name is required'
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Valid email is required'
		if (values.message.trim().length < 10) e.message = 'Message should be at least 10 characters'
		return e
	}

	function onSubmit(ev: React.FormEvent) {
		ev.preventDefault()
		const e = validate(form)
		setErrors(e)
		if (Object.keys(e).length === 0) {
			setSubmitted(true)
			setForm(initial)
		}
	}

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
					<FiMessageCircle className="text-2xl" />
				</div>
				<h2 className="text-2xl font-bold">Let's Collaborate and Innovate with Data!</h2>
			</motion.div>
			
			<motion.div 
				className="grid lg:grid-cols-2 gap-8"
				variants={containerVariants}
			>
				<motion.div 
					variants={itemVariants}
					className="card p-6 group hover:shadow-xl transition-all duration-300"
				>
					<motion.div 
						className="flex items-center gap-3 mb-6"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="p-2 rounded-full bg-brand/10 text-brand">
							<FiUser className="text-xl" />
						</div>
						<h3 className="text-xl font-semibold">Send me a message</h3>
					</motion.div>
					
					<form onSubmit={onSubmit} className="space-y-6">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2, duration: 0.5 }}
						>
							<label className="block text-sm font-medium mb-2">Name</label>
							<motion.input 
								value={form.name} 
								onChange={(e) => setForm({ ...form, name: e.target.value })} 
								className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all duration-300" 
								placeholder="Your name"
								variants={inputVariants}
								whileFocus="focus"
								whileBlur="blur"
							/>
							{errors.name && (
								<motion.p 
									className="text-sm text-red-500 mt-2"
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3 }}
								>
									{errors.name}
								</motion.p>
							)}
						</motion.div>
						
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.3, duration: 0.5 }}
						>
							<label className="block text-sm font-medium mb-2">Email</label>
							<motion.input 
								type="email" 
								value={form.email} 
								onChange={(e) => setForm({ ...form, email: e.target.value })} 
								className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all duration-300" 
								placeholder="your.email@example.com"
								variants={inputVariants}
								whileFocus="focus"
								whileBlur="blur"
							/>
							{errors.email && (
								<motion.p 
									className="text-sm text-red-500 mt-2"
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3 }}
								>
									{errors.email}
								</motion.p>
							)}
						</motion.div>
						
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4, duration: 0.5 }}
						>
							<label className="block text-sm font-medium mb-2">Message</label>
							<motion.textarea 
								rows={5} 
								value={form.message} 
								onChange={(e) => setForm({ ...form, message: e.target.value })} 
								className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all duration-300 resize-none" 
								placeholder="Tell me about your project or just say hello!"
								variants={inputVariants}
								whileFocus="focus"
								whileBlur="blur"
							/>
							{errors.message && (
								<motion.p 
									className="text-sm text-red-500 mt-2"
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3 }}
								>
									{errors.message}
								</motion.p>
							)}
						</motion.div>
						
						<motion.button 
							className="btn-primary w-full group relative overflow-hidden" 
							type="submit"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5, duration: 0.5 }}
						>
							<span className="flex items-center justify-center gap-2">
								<FiSend className="group-hover:translate-x-1 transition-transform duration-300" />
								Send Message
							</span>
						</motion.button>
						
						{submitted && (
							<motion.div 
								className="text-center p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5 }}
							>
								<p className="text-green-600 dark:text-green-400 font-medium">
									Thanks! Your message is ready to be sent.
								</p>
							</motion.div>
						)}
					</form>
				</motion.div>
				
				<motion.div 
					className="space-y-6"
					variants={containerVariants}
				>
					<motion.div 
						variants={itemVariants}
						className="card p-6 group hover:shadow-xl transition-all duration-300"
					>
						<motion.div 
							className="flex items-center gap-3 mb-6"
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<div className="p-2 rounded-full bg-brand/10 text-brand">
								<FiMail className="text-xl" />
							</div>
							<h3 className="text-xl font-semibold">Get in touch</h3>
						</motion.div>
						
						<motion.div 
							className="space-y-4"
							variants={containerVariants}
						>
							<motion.div 
								className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
								variants={itemVariants}
								whileHover={{ x: 5 }}
							>
								<FiMail className="text-brand text-lg" />
								<span className="text-slate-600 dark:text-slate-300">sachinyadavv4534@gmail.com</span>
							</motion.div>
							<motion.div 
								className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
								variants={itemVariants}
								whileHover={{ x: 5 }}
							>
								<FiMapPin className="text-brand text-lg" />
								<span className="text-slate-600 dark:text-slate-300">India</span>
							</motion.div>
						</motion.div>
						
						<motion.div 
							className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.5 }}
						>
							<h4 className="font-medium mb-4">Connect with me</h4>
							<div className="flex flex-wrap gap-3">
								<motion.a 
									className="btn-ghost hover:scale-105 transition-transform" 
									target="_blank" 
									href="https://github.com/Sachinyadav844"
									whileHover={{ y: -2 }}
								>
									<FiGithub /> GitHub
								</motion.a>
								<motion.a 
									className="btn-ghost hover:scale-105 transition-transform" 
									target="_blank" 
									href="https://www.linkedin.com/in/sachin-yadav-a5a3122a6"
									whileHover={{ y: -2 }}
								>
									<FiLinkedin /> LinkedIn
								</motion.a>
								<motion.a 
									className="btn-ghost hover:scale-105 transition-transform" 
									target="_blank" 
									href="https://www.kaggle.com/"
									whileHover={{ y: -2 }}
								>
									<FiTwitter /> Kaggle
								</motion.a>
							</div>
						</motion.div>
					</motion.div>
					
					<motion.div 
						variants={itemVariants}
						className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
					>
						<motion.iframe 
							title="map" 
							className="w-full h-64 group-hover:scale-105 transition-transform duration-500" 
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086195408178!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1610000000000" 
							loading="lazy" 
							referrerPolicy="no-referrer-when-downgrade"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.6 }}
						/>
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.div>
	)
}
