import React from 'react'
import Spline from '@splinetool/react-spline'

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-blue-400/80 mb-2">{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">{title}</h2>
      {subtitle && <p className="text-gray-400 text-base sm:text-lg">{subtitle}</p>}
    </div>
  )
}

const projects = [
  {
    title: 'Neon UI Library',
    desc: 'A modern component system with dark-first design and motion primitives.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Realtime Chat',
    desc: 'End-to-end encrypted chat with presence and typing indicators.',
    tags: ['FastAPI', 'WebSockets', 'MongoDB'],
    link: '#',
  },
  {
    title: '3D Showcase',
    desc: 'Interactive 3D scenes powered by Spline and GPU-accelerated effects.',
    tags: ['Spline', 'Three.js'],
    link: '#',
  },
]

const posts = [
  {
    title: 'Designing with Dark Energy: Color on Black',
    date: 'Aug 8, 2025',
    excerpt: 'Lessons learned building interfaces that glow on deep backgrounds.'
  },
  {
    title: 'From Idea to Interface: My Process',
    date: 'Jun 21, 2025',
    excerpt: 'Sketch, structure, systems — a simple flow for shipping consistently.'
  },
  {
    title: 'Motion as Meaning',
    date: 'Apr 2, 2025',
    excerpt: 'Micro-interactions that communicate intent without getting in the way.'
  },
]

function App() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      {/* Global gradient and grain */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(40%_40%_at_100%_0%,rgba(147,51,234,0.15),transparent_60%),radial-gradient(50%_50%_at_0%_100%,rgba(56,189,248,0.12),transparent_60%)]" />
        <div className="absolute inset-0 mix-blend-overlay opacity-[0.25]" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'300\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.8\'/></svg>' )' }} />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="text-white/90 font-semibold tracking-tight">
            <span className="text-blue-400">/</span> my-portfolio
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#blogs" className="text-gray-300 hover:text-white transition-colors">Blogs</a>
            <a href="#contact" className="text-gray-900 bg-blue-400/90 hover:bg-blue-400 px-3 py-1.5 rounded-md font-medium transition-colors">Contact</a>
          </nav>
          <a href="/test" className="md:hidden text-xs text-blue-300/80 hover:text-blue-300">Status</a>
        </div>
      </header>

      {/* Hero with Spline */}
      <section className="relative min-h-[90vh] flex items-center" id="home">
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#05060a]" />
        <div className="absolute inset-0 z-0" aria-hidden>
          <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-8">
          <div className="pt-28 md:pt-36">
            <p className="text-blue-300/80 text-sm uppercase tracking-[0.25em]">Designer • Developer</p>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Building bold, futuristic web experiences
            </h1>
            <p className="mt-5 text-gray-300 max-w-xl">
              I craft interfaces that glow on dark backgrounds and feel alive with subtle motion. Explore my latest projects and writing below.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center rounded-md bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 text-sm font-medium transition-colors">View Projects</a>
              <a href="#about" className="inline-flex items-center rounded-md border border-white/20 hover:border-white/40 text-white/90 px-4 py-2 text-sm font-medium transition-colors">About me</a>
            </div>
            {backendUrl && (
              <p className="mt-4 text-xs text-gray-400">API connected: {backendUrl}</p>
            )}
          </div>
          <div className="hidden md:block" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="About"
            title="Hi, I’m Alex — I turn ideas into polished products"
            subtitle="Full‑stack engineer with a design mindset. I obsess over clarity, performance, and smooth interactions."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { h: 'Frontend', p: 'React, Vite, Tailwind, motion. Dark-first systems that scale.' },
              { h: 'Backend', p: 'FastAPI, MongoDB, clean endpoints, predictable responses.' },
              { h: 'Craft', p: 'Attention to detail, accessibility, and meaningful motion.' },
            ].map((b) => (
              <div key={b.h} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6">
                <h3 className="text-lg font-semibold mb-2">{b.h}</h3>
                <p className="text-gray-300 text-sm">{b.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Work"
            title="Selected Projects"
            subtitle="A few things I’ve been building lately."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <a key={p.title} href={p.link} className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#0b0d14] hover:border-blue-400/30 transition-colors">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-transparent" />
                <div className="p-6 relative">
                  <h3 className="text-lg font-semibold mb-2 text-white">{p.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[11px] tracking-wide rounded-full border border-blue-400/30 text-blue-200/90 px-2 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section id="blogs" className="relative py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Writing"
            title="Latest posts"
            subtitle="Thoughts on design, dev, and building for the web."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.title} className="rounded-xl border border-white/10 bg-[#0b0d14] p-6 hover:border-blue-400/30 transition-colors">
                <p className="text-xs text-blue-300/80 mb-2">{post.date}</p>
                <h3 className="font-semibold text-white mb-2">{post.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{post.excerpt}</p>
                <button className="text-sm text-blue-300 hover:text-blue-200">Read more →</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s build something great"
            subtitle="Interested in working together or have a question? Send a quick note."
          />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-[#0b0d14] p-6">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input className="w-full rounded-md bg-black/50 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Name" />
                  <input className="w-full rounded-md bg-black/50 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Email" />
                </div>
                <textarea rows={5} className="w-full rounded-md bg-black/50 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Your message" />
                <button className="rounded-md bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 text-sm font-medium transition-colors">
                  Send message
                </button>
              </form>
            </div>
            <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6">
              <h3 className="text-lg font-semibold mb-2">Elsewhere</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">GitHub</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">Twitter / X</a></li>
                <li><a href="mailto:hello@example.com" className="hover:text-white">hello@example.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Your Name. Built with a black + blue vibe.</p>
      </footer>
    </div>
  )
}

export default App
