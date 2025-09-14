import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const skills = [
	{ name: 'Python', level: 90, icon: 'python' },
	{ name: 'DSA in C++', level: 80, icon: 'cplusplus' },
	{ name: 'Pandas', level: 85, icon: 'pandas' },
	{ name: 'NumPy', level: 85, icon: 'numpy' },
	{ name: 'scikit-learn', level: 78, icon: 'scikitlearn' },
	{ name: 'TensorFlow', level: 70, icon: 'tensorflow' },
	{ name: 'Tableau', level: 75, icon: 'tableau' },
]

const projects = [
	{
		title: 'Movie Recommendation System',
		description: 'Content-based recommender inspired by Netflix using TF-IDF and cosine similarity.',
		image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop',
		technologies: ['Python', 'Pandas', 'scikit-learn', 'NLP'],
		github: 'https://github.com/your-username/movie-recommender',
		live: 'https://your-demo-link.example.com',
	},
]

const achievements = [
	{ title: 'Finalist – HackGenNitra 1.0', event: 'Hackathon', year: '2024', description: 'AI + Data Science project finalist.' },
	{ title: 'IBM Data Science Certification', event: 'IBM', year: '2023', description: 'Completed specialization certification.' },
]

app.get('/api/skills', (_req, res) => res.json(skills))
app.get('/api/projects', (_req, res) => res.json(projects))
app.get('/api/achievements', (_req, res) => res.json(achievements))

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`API running on http://localhost:${port}`))


