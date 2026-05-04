import React, { useState } from 'react'
import { projects as initialProjects, categories as initialCategories } from '../data/projects'
import FadeIn from '../animations/FadeIn'
import { ExternalLink, Github, ArrowRight, Plus, X, Loader, Star, GitFork, Eye, Code } from 'lucide-react'

const Projects = () => {
  const [projects, setProjects] = useState(initialProjects)
  const [categories, setCategories] = useState(initialCategories)
  const [activeCategory, setActiveCategory] = useState('All')
  const [showModal, setShowModal] = useState(false)
  const [githubUrl, setGithubUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory)

  const fetchGitHubRepo = async () => {
    setError('')
    const match = githubUrl.match(/github\.com\/([^/]+)\/([^/\s?#]+)/)
    if (!match) { setError('Invalid GitHub URL. Use: https://github.com/owner/repo'); return }
    const [, owner, repo] = match
    setLoading(true)
    try {
      const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`)
      if (!res.ok) throw new Error('Repository not found or is private')
      const data = await res.json()
      const lang = data.language || ''
      const topics = data.topics || []
      let category = 'Other'
      if (topics.includes('fullstack') || topics.includes('full-stack')) category = 'Full Stack'
      else if (['React','Vue','Angular','HTML','CSS','JavaScript','TypeScript'].includes(lang)) category = 'Frontend'
      else if (['Python','Django','Go','Ruby','PHP'].includes(lang)) category = 'Backend'
      else if (lang) category = lang

      const newProject = {
        id: Date.now(),
        title: data.name.replace(/-/g, ' '),
        description: data.description || 'No description provided.',
        img: `https://opengraph.githubassets.com/1/${owner}/${repo}`,
        category,
        technologies: [data.language, ...topics.slice(0, 3)].filter(Boolean),
        metrics: `⭐ ${data.stargazers_count}`,
        demourl: data.homepage || '',
        githubUrl: data.html_url,
        stars: data.stargazers_count,
        forks: data.forks_count,
        watchers: data.watchers_count,
      }
      setProjects(prev => [newProject, ...prev])
      if (!categories.includes(category)) setCategories(prev => [...prev, category])
      setShowModal(false)
      setGithubUrl('')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 relative">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-blue-400 font-bold text-sm uppercase tracking-wider px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">Portfolio</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
              Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-slate-400 text-lg mt-5 max-w-2xl mx-auto">
              A selection of my best work showcasing full-stack development, modern design, and problem-solving
            </p>
          </div>
        </FadeIn>

        {/* Filter + Add Button */}
        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center items-center gap-3 mb-14">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-slate-800/60 text-slate-300 border border-slate-700 hover:border-blue-400/50 hover:text-white'
                }`}>
                {cat}
              </button>
            ))}
            <button onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold rounded-full hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-blue-500/20">
              <Plus className="w-4 h-4" /> Add from GitHub
            </button>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
          {filtered.map((project, index) => (
            <FadeIn key={project.id} delay={150 + index * 60}>
              <div className="group relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/60 border border-blue-500/15 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">

                {/* Image */}
                <div className="relative h-52 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                  <img src={project.img} alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={e => { e.target.style.display = 'none' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Hover overlay buttons */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                    {project.demourl && (
                      <a href={project.demourl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full hover:bg-blue-400 hover:scale-105 transition-all">
                        <ExternalLink className="w-4 h-4" /> Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-slate-600 hover:scale-105 transition-all">
                        <Github className="w-4 h-4" /> Code
                      </a>
                    )}
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-black/50 backdrop-blur-sm border border-blue-400/30 rounded-full text-xs font-semibold text-blue-300">
                      <Code className="w-3 h-3" />{project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors capitalize leading-snug">
                      {project.title}
                    </h3>
                    <span className="text-xs text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-1 rounded-full whitespace-nowrap shrink-0">
                      {project.metrics}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{project.description}</p>

                  {/* GitHub stats if fetched */}
                  {project.stars !== undefined && (
                    <div className="flex gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-400" />{project.stars}</span>
                      <span className="flex items-center gap-1"><GitFork className="w-3 h-3 text-blue-400" />{project.forks}</span>
                      <span className="flex items-center gap-1"><Eye className="w-3 h-3 text-purple-400" />{project.watchers}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 group-hover:border-blue-400/40 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a href={project.githubUrl || project.demourl || '#'} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 font-semibold group/link">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* View All */}
        <FadeIn delay={400}>
          <div className="text-center pt-8 border-t border-slate-800">
            <a href="https://github.com/ashok0960/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600/15 to-cyan-600/15 border border-blue-400/30 hover:border-blue-400/60 text-white font-semibold rounded-full hover:bg-gradient-to-r hover:from-blue-600/25 hover:to-cyan-600/25 hover:scale-105 transition-all">
              <Github className="w-5 h-5" />
              View All on GitHub
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Add GitHub Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
          onClick={e => e.target === e.currentTarget && setShowModal(false)}>
          <FadeIn>
            <div className="w-full max-w-md bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 rounded-2xl p-8 shadow-2xl shadow-blue-500/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Add GitHub Project</h3>
                  <p className="text-slate-400 text-sm mt-1">Paste any public repository URL</p>
                </div>
                <button onClick={() => { setShowModal(false); setError(''); setGithubUrl('') }}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-700/60 hover:bg-slate-700 transition-all text-slate-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus-within:border-blue-400/60 transition-all">
                  <Github className="w-5 h-5 text-blue-400 shrink-0" />
                  <input type="url" value={githubUrl} onChange={e => setGithubUrl(e.target.value)}
                    placeholder="https://github.com/username/repo"
                    className="flex-1 bg-transparent text-white placeholder-slate-500 focus:outline-none text-sm"
                    onKeyDown={e => e.key === 'Enter' && !loading && fetchGitHubRepo()} />
                </div>

                {error && (
                  <div className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0" />{error}
                  </div>
                )}

                <button onClick={fetchGitHubRepo} disabled={loading || !githubUrl.trim()}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2">
                  {loading
                    ? <><Loader className="w-4 h-4 animate-spin" /> Fetching...</>
                    : <><Plus className="w-4 h-4" /> Add Project</>
                  }
                </button>
              </div>
              <p className="text-slate-600 text-xs mt-4 text-center">Public repositories only</p>
            </div>
          </FadeIn>
        </div>
      )}
    </section>
  )
}

export default Projects
