import { useEffect, useState } from 'react'

const linkedinUrl = 'https://www.linkedin.com/in/j%C3%A9ssika-s-46b532b9/'
const githubUrl = 'https://github.com/jessy-carla'
const emailUrl = 'mailto:je.carla@hotmail.com.br'

function Icon({ name, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  const icons = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    code: <><path d="m8 9-3 3 3 3" /><path d="m16 9 3 3-3 3" /><path d="m14 5-4 14" /></>,
    github: <><path d="M15 22v-3.9c.04-1 .32-1.96.8-2.84 2.64-.29 5.4-1.3 5.4-5.88a4.6 4.6 0 0 0-1.2-3.2c.29-.8.26-1.86-.12-2.84 0 0-1-.32-3.3 1.2a11.4 11.4 0 0 0-6 0c-2.3-1.52-3.3-1.2-3.3-1.2-.38.98-.41 2.04-.12 2.84a4.6 4.6 0 0 0-1.2 3.2c0 4.57 2.75 5.59 5.39 5.88.62.63.91 1.49.8 2.36V22" /><path d="M9 18c-3 .9-3-1.5-4.2-1.8" /></>,
    linkedin: <><path d="M7 9v8" /><path d="M7 5v.01" /><path d="M11 17V9" /><path d="M11 12.5c0-2 5-2.2 5 0V17" /><rect x="3" y="3" width="18" height="18" rx="2" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
    spark: <><path d="m12 3-1.6 5.4L5 10l5.4 1.6L12 17l1.6-5.4L19 10l-5.4-1.6L12 3Z" /><path d="m19 16-.7 2.3L16 19l2.3.7L19 22l.7-2.3L22 19l-2.3-.7L19 16Z" /></>,
  }

  return <svg {...common}>{icons[name]}</svg>
}

function ExternalLink({ href, children, className = '' }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => document.documentElement.style.setProperty('--scroll', window.scrollY > 20 ? '1' : '0')
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <main>
      <nav className="nav" aria-label="Navegação principal">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Ir ao início">
          <span>JS</span>
          <span className="brand-name">Jéssika Carla</span>
        </a>

        <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu" aria-expanded={isMenuOpen}>
          <Icon name={isMenuOpen ? 'close' : 'menu'} />
        </button>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <ExternalLink href={linkedinUrl} className="nav-linkedin"><Icon name="linkedin" size={16} /> LinkedIn</ExternalLink>
        </div>
      </nav>

      <section id="inicio" className="hero section">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="status-dot" /> Desenvolvedora Front-End em formação</p>
          <h1>Construindo a web<br /><em>uma ideia por vez.</em></h1>
          <p className="hero-description">Sou Jéssika Carla, desenvolvedora Front-End em formação. Crio interfaces modernas, responsivas e pensadas para proporcionar boas experiências digitais.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">Conheça meu trabalho <Icon name="arrow" size={18} /></a>
            <ExternalLink href={linkedinUrl} className="button button-secondary"><Icon name="linkedin" size={18} /> Ver LinkedIn</ExternalLink>
          </div>
        </div>

        <div className="hero-art reveal delay-1" aria-label="Retrato de Jéssika Carla">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="shine shine-one" />
          <div className="shine shine-two" />
          <div className="photo-wrap"><img src="https://avatars.githubusercontent.com/u/232445513?v=4" alt="Jéssika Carla" /></div>
          <div className="monogram" aria-hidden="true"><span>J</span><span>C</span></div>
          <div className="art-caption">
            <Icon name="location" size={16} />
            <span>São Paulo, Brasil</span>
          </div>
        </div>
      </section>

      <section id="sobre" className="about section">
        <div className="section-label reveal"><span>01</span> Sobre mim</div>
        <div className="about-grid">
          <h2 className="reveal">Tecnologia é a ferramenta. <em>Impacto</em> é o que busco criar.</h2>
          <div className="about-content reveal delay-1">
            <p>Sou Técnica em Análise e Desenvolvimento de Sistemas pela ETE e certificada em Programação Front-End pelo programa Bolsa Futuro Digital — APONTI. Minha base une técnica, curiosidade e atenção ao que torna uma interface realmente útil.</p>
            <p>Estou aprimorando minhas habilidades com projetos práticos e buscando minha primeira oportunidade na tecnologia para aprender com boas equipes e contribuir com soluções digitais de qualidade.</p>
            <div className="mini-profile">
              <div className="mini-profile-icon"><Icon name="spark" /></div>
              <div><strong>Aprendizado contínuo</strong><span>React, APIs, componentização e boas práticas.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="projects section">
        <div className="projects-heading">
          <div className="section-label reveal"><span>02</span> Projetos & repertório</div>
          <p className="reveal delay-1">Projetos práticos para consolidar fundamentos de desenvolvimento web, criar boas interfaces e seguir evoluindo todos os dias.</p>
        </div>

        <div className="project-list">
          <article className="project-card featured reveal">
            <div className="project-visual visual-first"><span className="visual-number">01</span><span className="visual-shape" /></div>
            <div className="project-info"><p className="project-type">JavaScript</p><h3>LOJA</h3><p>Projeto de desenvolvimento web publicado em JavaScript, com foco em prática e evolução técnica.</p><ExternalLink href="https://github.com/jessy-carla/LOJA" className="text-link">Ver repositório <Icon name="arrow" size={16} /></ExternalLink></div>
          </article>
          <article className="project-card reveal delay-1">
            <div className="project-visual visual-second"><Icon name="code" size={32} /><span>PROJETOS</span></div>
            <div className="project-info"><p className="project-type">JavaScript</p><h3>lanmovies</h3><p>Projeto disponível no GitHub, construído para explorar desenvolvimento web e soluções com JavaScript.</p><ExternalLink href="https://github.com/jessy-carla/lanmovies" className="text-link">Ver repositório <Icon name="arrow" size={16} /></ExternalLink></div>
          </article>
          <article className="project-card reveal delay-2">
            <div className="project-visual visual-third"><span>JS</span><div className="visual-lines"><i /><i /><i /></div></div>
            <div className="project-info"><p className="project-type">Interface web</p><h3>site-matricula-online</h3><p>Uma iniciativa voltada à criação de uma experiência web para matrículas online.</p><ExternalLink href="https://github.com/jessy-carla/site-matricula-online" className="text-link">Ver repositório <Icon name="arrow" size={16} /></ExternalLink></div>
          </article>
        </div>
      </section>

      <section id="contato" className="contact section">
        <div className="contact-orb" />
        <div className="contact-content reveal">
          <p className="eyebrow">Aberta à primeira oportunidade</p>
          <h2>Vamos construir algo <em>incrível</em> juntos?</h2>
          <p>Se você procura uma desenvolvedora Front-End comprometida, curiosa e disposta a crescer, adoraria conversar.</p>
          <div className="contact-actions">
            <a href={emailUrl} className="button button-light">Enviar um e-mail <Icon name="arrow" size={18} /></a>
            <ExternalLink href={linkedinUrl} className="contact-social" aria-label="Abrir LinkedIn"><Icon name="linkedin" /></ExternalLink>
            <ExternalLink href={githubUrl} className="contact-social" aria-label="Abrir GitHub"><Icon name="github" /></ExternalLink>
          </div>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Jéssika Carla</span>
        <span>Feito com intenção em São Paulo.</span>
      </footer>
    </main>
  )
}

export default App
