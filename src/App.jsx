import { useEffect, useState } from 'react'
import { profile, stats, experience, projects, skills, education, certifications } from './data'
import { GitHub, LinkedIn, Mail, Phone, Code, Download, Sun, Moon } from './components/Icons'

const NAV = [
  { id: 'work', label: 'Internships' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
    } catch { }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { }
  }, [theme])
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}

function Header() {
  const [theme, toggle] = useTheme()
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="wrap header-inner">
        <a href="#top" className="logo" aria-label="Back to top">
          <span className="logo-text">{profile.name}</span>
        </a>
        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Main">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-btn" onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <button className="icon-btn menu-btn" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Menu">
            <span className="burger" data-open={open} />
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hello">Hi, I’m</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="intro">{profile.intro}</p>
          <div className="cta">
            <a className="btn btn-primary" href="#contact">Get in touch</a>
            {profile.resume && (
              <a className="btn btn-ghost" href={profile.resume} download>
                <Download /> Download resume
              </a>
            )}
          </div>
          <dl className="stats">
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="hero-image">
          <img src="/photo.jpeg" alt={profile.name} className="profile-img" />
        </div>
      </div>
    </section>
  )
}

function SectionHead({ title, children }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  )
}

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => <li key={t}>{t}</li>)}
    </ul>
  )
}

function Experience() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <SectionHead title="Internships">
          Two internships in Neyveli, both ending with software people actually use.
        </SectionHead>
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.org} className="job">
              <div className="job-meta">
                <span className="job-period">{e.period}</span>
                <span className={`badge badge-${e.status}`}>{e.statusText}</span>
              </div>
              <div className="job-body">
                <h3>{e.org}</h3>
                <p className="job-title">{e.title} · {e.place}</p>
                <ul className="points">
                  {e.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <Tags items={e.tech} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Flow({ steps }) {
  return (
    <ol className="flow" aria-label="Approval flow">
      {steps.map((s, i) => (
        <li key={s} style={{ '--i': i }}>
          <span>{s}</span>
        </li>
      ))}
    </ol>
  )
}

function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <div className="wrap">
        <SectionHead title="Projects">
          Full-stack applications built end to end.
        </SectionHead>
        <div className="projects">
          {projects.map((p, idx) => (
            <article key={p.name} className={`project ${idx === 0 ? 'project-feature' : ''}`}>
              <div className="project-top">
                <p className="project-kind">{p.kind} · {p.date}</p>
                <h3>{p.name}</h3>
                <p className="project-summary">{p.summary}</p>
              </div>
              {p.flow && <Flow steps={p.flow} />}
              <ul className="points">
                {p.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
              <Tags items={p.tech} />
              <div className="project-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer"><GitHub /> View code</a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">Open live site</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <SectionHead title="Skills & education" />
        <div className="skills-grid">
          <div className="skills">
            {skills.map((s) => (
              <div key={s.group} className="skill-row">
                <h3>{s.group}</h3>
                <Tags items={s.items} />
              </div>
            ))}
          </div>
          <div className="side">
            <div className="panel">
              <h3>Education</h3>
              <p className="panel-main">{education.degree}</p>
              <p>{education.school}</p>
              <p className="muted">{education.period} · {education.score}</p>
            </div>
            <div className="panel">
              <h3>Certifications</h3>
              <ul className="certs">
                {certifications.map((c) => (
                  <li key={c.name}>
                    {c.pdf ? (
                      <a href={c.pdf} target="_blank" rel="noreferrer" className="panel-link">
                        <span className="panel-main">{c.name}</span>
                      </a>
                    ) : (
                      <p className="panel-main">{c.name}</p>
                    )}
                    <p className="muted">{c.issuer}, {c.year}{c.note ? ` · ${c.note}` : ''}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel">
              <h3>Problem solving</h3>
              <ul className="certs">
                <li>
                  <a href={profile.leetcode} target="_blank" rel="noreferrer" className="panel-link">
                    <span className="panel-main">150+ on LeetCode</span>
                  </a>
                </li>
                <li>
                  <a href={profile.gfg} target="_blank" rel="noreferrer" className="panel-link">
                    <span className="panel-main">100+ on GeeksforGeeks</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const links = [
    { href: `mailto:${profile.email}`, label: profile.email, icon: <Mail /> },
    { href: `tel:${profile.phone.replace(/\s/g, '')}`, label: profile.phone, icon: <Phone /> },
    { href: profile.linkedin, label: 'LinkedIn', icon: <LinkedIn />, ext: true },
    { href: profile.github, label: 'GitHub', icon: <GitHub />, ext: true },
    { href: profile.leetcode, label: 'LeetCode', icon: <Code />, ext: true },
  ]
  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-inner">
        <div>
          <h2>Let’s build something together</h2>
          <p>
            I’m looking for software development internships and graduate roles.
            The quickest way to reach me is email.
          </p>
          <a className="btn btn-accent" href={`mailto:${profile.email}`}>Email me</a>
        </div>
        <ul className="contact-links">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} {...(l.ext ? { target: '_blank', rel: 'noreferrer' } : {})}>
                {l.icon}<span>{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <a href="#work" className="skip">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

    </>
  )
}
