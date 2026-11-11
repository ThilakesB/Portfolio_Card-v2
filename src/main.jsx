import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, Mail } from 'lucide-react'
import './styles.css'

function GithubIcon({ size = 21, strokeWidth = 1.8, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon({ size = 21, strokeWidth = 1.8, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function InstagramIcon({ size = 21, strokeWidth = 1.8, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const links = [
  { label: 'GitHub', href: 'https://github.com/ThilakesB', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thilakeswaran-b-50b431280/', icon: LinkedinIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/thilak.x/?hl=en', icon: InstagramIcon },
  { label: 'Email', href: 'mailto:thilakesb@gmail.com', icon: Mail },
]

function SocialLinks() {
  return (
    <nav className="social-links" aria-label="Social links">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          className={`social-link ${!href ? 'is-disabled' : ''}`}
          href={href || undefined}
          target={href?.startsWith('http') ? '_blank' : undefined}
          rel={href?.startsWith('http') ? 'noreferrer' : undefined}
          aria-label={href ? label : `${label} link unavailable`}
          title={href ? label : `${label} link unavailable`}
          onClick={(event) => !href && event.preventDefault()}
        >
          <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
        </a>
      ))}
    </nav>
  )
}

function ProfilePanel() {
  return (
    <section className="profile-panel" aria-labelledby="profile-name">
      <div className="portrait-frame">
        <img
          className="portrait-image"
          src={`${import.meta.env.BASE_URL}profile.png`}
          alt="Portrait of Thilakeswaran B"
        />
      </div>
      <div className="identity">
        <p className="eyebrow">Portfolio / 2026</p>
        <h1 id="profile-name">Thilakeswaran B</h1>
        <p className="pronouns">(he/him)</p>
        <p className="role">Software Developer <span>&amp;</span> AI/ML Enthusiast</p>
      </div>
      <a className="email-button" href="mailto:thilakesb@gmail.com">
        Email me <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    </section>
  )
}

function AboutPanel() {
  return (
    <section className="about-panel" aria-labelledby="about-title">
      <div className="about-content">
        <p className="section-kicker">01 / About</p>
        <h2 id="about-title">About Me</h2>
        <div className="rule" />
        <div className="intro">
          <p>
            I am Thilakeswaran, a final-year Computer Science and Engineering student
            specializing in Artificial Intelligence and Machine Learning. I enjoy building
            meaningful digital products and exploring AI, cybersecurity, cloud computing,
            and full-stack development.
          </p>
          <p>
            I love transforming ideas into real-world projects, experimenting with emerging
            technologies, and collaborating with developer communities. I am always open to
            exciting opportunities, collaborations, and innovative projects.
          </p>
        </div>
        <div className="action-row">
          <a
            className="outline-button"
            href={`${import.meta.env.BASE_URL}Thilakeswaran-B-Resume.pdf`}
            download
          >
            Download resume <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a className="outline-button" href="https://github.com/ThilakesB" target="_blank" rel="noreferrer">
            Explore projects <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
      <footer className="about-footer">
        <p>Tamil Nadu, India</p>
        <SocialLinks />
      </footer>
    </section>
  )
}

function App() {
  return (
    <main className="portfolio-shell">
      <ProfilePanel />
      <AboutPanel />
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
