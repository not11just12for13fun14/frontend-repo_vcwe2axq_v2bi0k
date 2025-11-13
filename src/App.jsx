import React, { useMemo, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-3xl mx-auto text-center mb-12"
    >
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-blue-400/80 mb-2">{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">{title}</h2>
      {subtitle && <p className="text-gray-400 text-base sm:text-lg">{subtitle}</p>}
    </motion.div>
  )
}

const services = [
  {
    title: 'Design to Dev',
    desc: 'Pixel-perfect implementation of Figma designs with attention to motion and accessibility.',
    tags: ['React', 'Tailwind', 'A11y']
  },
  {
    title: 'Full‑stack Apps',
    desc: 'From API to UI: performant, maintainable, and documented.',
    tags: ['FastAPI', 'MongoDB', 'Testing']
  },
  {
    title: 'Performance + DX',
    desc: 'Audits, code-splitting, caching strategies, and developer experience improvements.',
    tags: ['Vite', 'Code Split', 'Caching']
  },
]

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

function GlowOrb({ className = '', size = 240, color = 'rgba(59,130,246,0.25)', duration = 10, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0.15, scale: 0.9 }}
      animate={{
        opacity: [0.15, 0.3, 0.15],
        scale: [0.9, 1.05, 0.9],
        x: [0, 20, -10, 0],
        y: [0, -15, 10, 0],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
      className={`pointer-events-none blur-2xl rounded-full ${className}`}
      style={{ width: size, height: size, background: `radial-gradient(50%_50%_at_50%_50%, ${color}, transparent)` }}
    />
  )
}

function App() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const noiseSvg = encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#n)' opacity='0.8'/></svg>"
  )

  // Interactive parallax for hero content
  const [isHover, setIsHover] = useState(false)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-200, 200], [8, -8]), { stiffness: 120, damping: 12 })
  const ry = useSpring(useTransform(mx, [-200, 200], [-8, 8]), { stiffness: 120, damping: 12 })
  const tX = useSpring(useTransform(mx, [-200, 200], [-10, 10]), { stiffness: 120, damping: 12 })
  const tY = useSpring(useTransform(my, [-200, 200], [-6, 6]), { stiffness: 120, damping: 12 })

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    mx.set(x)
    my.set(y)
  }

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    inview: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      {/* Global gradient and grain */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(40%_40%_at_100%_0%,rgba(147,51,234,0.15),transparent_60%),radial-gradient(50%_50%_at_0%_100%,rgba(56,189,248,0.12),transparent_60%)]" />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-[0.25]"
          style={{ backgroundImage: `url("data:image/svg+xml;utf8,${noiseSvg}")` }}
        />
        <GlowOrb className="absolute -top-10 -left-10" size={320} color="rgba(59,130,246,0.25)" duration={18} />
        <GlowOrb className="absolute top-20 right-10" size={260} color="rgba(147,51,234,0.22)" duration={16} delay={2} />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="text-white/90 font-semibold tracking-tight">
            <span className="text-blue-400">/</span> tothemax.dev
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#blogs" className="text-gray-300 hover:text-white transition-colors">Blogs</a>
            <a href="#contact" className="text-gray-900 bg-blue-400/90 hover:bg-blue-400 px-3 py-1.5 rounded-md font-medium transition-colors">Contact</a>
          </nav>
          <a href="/test" className="md:hidden text-xs text-blue-300/80 hover:text-blue-300">Status</a>
        </div>
      </header>

      {/* Hero with Spline */}
      <section
        className="relative min-h-[90vh] flex items-center"
        id="home"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onMouseMove={onMouseMove}
      >
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#05060a]" />
        <div className="absolute inset-0 z-0" aria-hidden>
          <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-8">
          <motion.div
            style={{
              rotateX: isHover ? rx : 0,
              rotateY: isHover ? ry : 0,
              translateX: isHover ? tX : 0,
              translateY: isHover ? tY : 0,
              transformStyle: 'preserve-3d',
            }}
            className="pt-28 md:pt-36"
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-blue-300/80 text-sm uppercase tracking-[0.25em]"
            >
              Designer • Developer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight"
            >
              Building bold, futuristic web experiences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-gray-300 max-w-xl"
            >
              I craft interfaces that glow on dark backgrounds and feel alive with subtle motion. Explore my latest projects and writing below.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <motion.a
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -2, boxShadow: '0 10px 30px rgba(59,130,246,0.35)' }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="inline-flex items-center rounded-md bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 text-sm font-medium transition-colors"
              >
                View Projects
              </motion.a>
              <motion.a
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#about"
                className="inline-flex items-center rounded-md border border-white/20 hover:border-white/40 text-white/90 px-4 py-2 text-sm font-medium transition-colors"
              >
                About me
              </motion.a>
            </motion.div>
            {backendUrl && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-4 text-xs text-gray-400"
              >
                API connected: {backendUrl}
              </motion.p>
            )}
          </motion.div>
          <div className="hidden md:block" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="About"
            title="Hi, I’m Max — I turn ideas into polished products"
            subtitle="Full‑stack engineer with a design mindset. I obsess over clarity, performance, and smooth interactions."
          />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { h: 'Frontend', p: 'React, Vite, Tailwind, motion. Dark-first systems that scale.' },
              { h: 'Backend', p: 'FastAPI, MongoDB, clean endpoints, predictable responses.' },
              { h: 'Craft', p: 'Attention to detail, accessibility, and meaningful motion.' },
            ].map((b) => (
              <motion.div
                key={b.h}
                variants={cardVariants}
                whileHover={{ y: -4, borderColor: 'rgba(59,130,246,0.35)' }}
                className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6"
              >
                <h3 className="text-lg font-semibold mb-2">{b.h}</h3>
                <p className="text-gray-300 text-sm">{b.p}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Services"
            title="How I can help"
            subtitle="Targeted engagements that move your product forward."
          />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(59,130,246,0.18)' }}
                className="group rounded-xl border border-white/10 bg-[#0b0d14] hover:border-blue-400/30 transition-colors p-6"
              >
                <h3 className="text-lg font-semibold mb-2 text-white">{s.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[11px] tracking-wide rounded-full border border-blue-400/30 text-blue-200/90 px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
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
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((p) => (
              <motion.a
                key={p.title}
                variants={cardVariants}
                whileHover={{ y: -6, borderColor: 'rgba(59,130,246,0.35)' }}
                href={p.link}
                className="group relative rounded-xl overflow-hidden border border-white/10 bg-[#0b0d14] hover:border-blue-400/30 transition-colors"
              >
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
              </motion.a>
            ))}
          </motion.div>
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
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="grid md:grid-cols-3 gap-6"
          >
            {posts.map((post) => (
              <motion.article
                key={post.title}
                variants={cardVariants}
                whileHover={{ y: -4, borderColor: 'rgba(59,130,246,0.3)' }}
                className="rounded-xl border border-white/10 bg-[#0b0d14] p-6 hover:border-blue-400/30 transition-colors"
              >
                <p className="text-xs text-blue-300/80 mb-2">{post.date}</p>
                <h3 className="font-semibold text-white mb-2">{post.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{post.excerpt}</p>
                <button className="text-sm text-blue-300 hover:text-blue-200">Read more →</button>
              </motion.article>
            ))}
          </motion.div>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-xl border border-white/10 bg-[#0b0d14] p-6"
            >
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input className="w-full rounded-md bg-black/50 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Name" />
                  <input className="w-full rounded-md bg-black/50 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Email" />
                </div>
                <textarea rows={5} className="w-full rounded-md bg-black/50 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Your message" />
                <motion.button
                  whileHover={{ y: -2, boxShadow: '0 10px 30px rgba(59,130,246,0.35)' }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-md bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 text-sm font-medium transition-colors"
                >
                  Send message
                </motion.button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6"
            >
              <h3 className="text-lg font-semibold mb-2">Elsewhere</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">GitHub</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">Twitter / X</a></li>
                <li><a href="mailto:hello@tothemax.dev" className="hover:text-white">hello@tothemax.dev</a></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} tothemax.dev — Built with a black + blue vibe.</p>
      </footer>
    </div>
  )
}

export default App
