import { profile, kpis, about, skills, experience, education } from './data.js'

function Section({ title, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default function App() {
  return (
    <main className="cv">
      <header className="head">
        <div>
          <h1>{profile.name}</h1>
          <p className="title">{profile.title}</p>
        </div>
        <a className="print" href={`${import.meta.env.BASE_URL}Rayen_Ameur_CV.pdf`} download="Rayen_Ameur_CV.pdf">
          Download PDF
        </a>
      </header>

      <nav className="links">
        {profile.links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
            <span>{l.label}</span>{l.value}
          </a>
        ))}
      </nav>

      <div className="stats">
        {kpis.map((k) => (
          <div key={k.label}><strong>{k.value}</strong><span>{k.label}</span></div>
        ))}
      </div>

      <Section title="About me">
        {about.map((p) => <p key={p} className="about">{p}</p>)}
      </Section>

      <Section title="Education">
        {education.map((e) => (
          <div key={e.degree} className="item">
            <div className="row">
              <h3>{e.degree}</h3>
              <time>{e.date}</time>
            </div>
            <p>{e.school}</p>
          </div>
        ))}
      </Section>

      <Section title="Skills">
        <div className="skills">
          {skills.map((s) => (
            <div key={s.group}>
              <h3>{s.group}</h3>
              <ul className="tags">{s.items.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Experience">
        <ol className="timeline">
          {experience.map((e, i) => (
            <li key={i} className="item">
              <div className="row">
                <h3>{e.role}{e.org && <span className="org"> · {e.org}</span>}</h3>
                <time>{e.date}</time>
              </div>
              <p>{e.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <footer className="foot">© {new Date().getFullYear()} {profile.name}</footer>
    </main>
  )
}
