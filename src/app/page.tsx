"use client"
import React, { useState, useEffect } from 'react';
import { Sun, Leaf, Shield, TrendingDown, Menu, X, ChevronRight, Zap, Target } from 'lucide-react';

export default function EcoInovaLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const valores = [
    {
      icon: <Leaf style={{ width: '48px', height: '48px' }} />,
      title: "Sustentabilidade",
      description: "Compromisso com o meio ambiente e o futuro do planeta"
    },
    {
      icon: <Zap style={{ width: '48px', height: '48px' }} />,
      title: "Inovação",
      description: "Tecnologia de ponta em energia solar acessível"
    },
    {
      icon: <Shield style={{ width: '48px', height: '48px' }} />,
      title: "Transparência",
      description: "Clareza total em processos, custos e resultados"
    },
    {
      icon: <TrendingDown style={{ width: '48px', height: '48px' }} />,
      title: "Custo-benefício",
      description: "Economia real na sua conta de energia"
    }
  ];

  const equipe = [
    {
      name: "Ana Paula Silva",
      role: "CEO & Co-fundadora",
      bio: "Engenheira Ambiental com 15 anos de experiência",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "Carlos Mendes",
      role: "CTO & Co-fundador",
      bio: "Especialista em sistemas fotovoltaicos",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Juliana Costa",
      role: "Diretora de Operações",
      bio: "MBA em Sustentabilidade e Gestão",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    }
  ];

  const timeline = [
    { year: "2020", event: "Fundação da EcoInova em São Paulo" },
    { year: "2021", event: "Primeiras 100 instalações residenciais" },
    { year: "2023", event: "Expansão para 5 estados brasileiros" },
    { year: "2025", event: "Mais de 2.000 clientes atendidos" }
  ];

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Header */
        .header {
          position: fixed;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .header-scrolled {
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .logo-text {
          font-size: 24px;
          font-weight: bold;
          transition: color 0.3s;
        }

        .menu-desktop {
          display: none;
          gap: 32px;
        }

        @media (min-width: 768px) {
          .menu-desktop {
            display: flex;
          }
        }

        .menu-link {
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .menu-link:hover {
          color: #EAB308;
        }

        .menu-button {
          background: none;
          border: none;
          cursor: pointer;
          display: block;
        }

        @media (min-width: 768px) {
          .menu-button {
            display: none;
          }
        }

        .mobile-menu {
          margin-top: 16px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          padding: 16px;
        }

        .mobile-menu a {
          display: block;
          padding: 8px 0;
          text-decoration: none;
          color: #374151;
        }

        .mobile-menu a:hover {
          color: #EAB308;
        }

        /* Hero Section */
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop');
          background-size: cover;
          background-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(30, 58, 138, 0.8), rgba(6, 78, 59, 0.8));
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          color: white;
          padding: 0 24px;
        }

        .badge {
          display: inline-block;
          margin-bottom: 24px;
          padding: 8px 16px;
          background: rgba(234, 179, 8, 0.2);
          border-radius: 50px;
          border: 1px solid rgba(234, 179, 8, 0.3);
        }

        .badge-text {
          color: #FDE047;
          font-weight: 600;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 4.5rem;
          }
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 16px;
          color: #E5E7EB;
        }

        @media (min-width: 768px) {
          .hero-subtitle {
            font-size: 1.5rem;
          }
        }

        .hero-vision {
          font-size: 1.125rem;
          margin-bottom: 48px;
          color: #D1D5DB;
        }

        .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
        }

        @media (min-width: 640px) {
          .cta-buttons {
            flex-direction: row;
            justify-content: center;
          }
        }

        .btn-primary {
          background: #EAB308;
          color: #111827;
          padding: 16px 32px;
          border-radius: 8px;
          font-weight: bold;
          font-size: 1.125rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        .btn-primary:hover {
          background: #FDE047;
          transform: scale(1.05);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          color: white;
          padding: 16px 32px;
          border-radius: 8px;
          font-weight: bold;
          font-size: 1.125rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }

        /* Section Styles */
        .section {
          padding: 80px 24px;
        }

        .section-bg-light {
          background: linear-gradient(to bottom right, #F9FAFB, #EFF6FF);
        }

        .section-title {
          text-align: center;
          margin-bottom: 64px;
        }

        .section-title h2 {
          font-size: 2.5rem;
          font-weight: bold;
          color: #111827;
          margin-bottom: 16px;
        }

        @media (min-width: 768px) {
          .section-title h2 {
            font-size: 3rem;
          }
        }

        .title-underline {
          width: 96px;
          height: 4px;
          background: #EAB308;
          margin: 0 auto 24px;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: #6B7280;
          max-width: 672px;
          margin: 0 auto;
        }

        /* História */
        .historia-text {
          max-width: 896px;
          margin: 0 auto 64px;
        }

        .historia-text p {
          font-size: 1.125rem;
          color: #374151;
          line-height: 1.8;
          text-align: center;
          margin-bottom: 32px;
        }

        .timeline {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          max-width: 1280px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .timeline {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .timeline-item {
          position: relative;
        }

        .timeline-card {
          background: white;
          border-radius: 8px;
          padding: 24px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          border-top: 4px solid #EAB308;
          transition: box-shadow 0.3s;
        }

        .timeline-card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .timeline-year {
          font-size: 1.875rem;
          font-weight: bold;
          color: #EAB308;
          margin-bottom: 8px;
        }

        .timeline-event {
          color: #374151;
        }

        /* Valores */
        .valores-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          max-width: 1536px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .valores-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .valores-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .valor-card {
          background: linear-gradient(to bottom right, #EFF6FF, #ECFDF5);
          border-radius: 12px;
          padding: 32px;
          transition: all 0.3s;
          border: 1px solid #D1FAE5;
        }

        .valor-card:hover {
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          transform: translateY(-8px);
        }

        .valor-icon {
          color: #059669;
          margin-bottom: 16px;
        }

        .valor-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #111827;
          margin-bottom: 12px;
        }

        .valor-description {
          color: #6B7280;
          line-height: 1.6;
        }

        /* Equipe */
        .equipe-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          max-width: 1152px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .equipe-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .member-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: all 0.3s;
        }

        .member-card:hover {
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          transform: translateY(-8px);
        }

        .member-image-container {
          height: 320px;
          overflow: hidden;
        }

        .member-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .member-card:hover .member-image {
          transform: scale(1.1);
        }

        .member-info {
          padding: 24px;
        }

        .member-name {
          font-size: 1.5rem;
          font-weight: bold;
          color: #111827;
          margin-bottom: 8px;
        }

        .member-role {
          color: #EAB308;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .member-bio {
          color: #6B7280;
        }

        /* CTA Final */
        .cta-section {
          padding: 80px 24px;
          background: linear-gradient(to right, #1E3A8A, #064E3B);
          color: white;
          text-align: center;
        }

        .cta-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 24px;
          color: #FDE047;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 24px;
        }

        @media (min-width: 768px) {
          .cta-title {
            font-size: 3rem;
          }
        }

        .cta-text {
          font-size: 1.25rem;
          margin-bottom: 40px;
          max-width: 672px;
          margin-left: auto;
          margin-right: auto;
          color: #E5E7EB;
        }

        /* Footer */
        .footer {
          background: #111827;
          color: white;
          padding: 48px 24px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          margin-bottom: 32px;
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .footer-title {
          font-size: 1.125rem;
          font-weight: bold;
          margin-bottom: 16px;
        }

        .footer-text {
          color: #9CA3AF;
        }

        .footer-links {
          display: flex;
          gap: 16px;
        }

        .footer-link {
          color: #9CA3AF;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-link:hover {
          color: #EAB308;
        }

        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 32px;
          text-align: center;
          color: #9CA3AF;
        }
      `}</style>

      <div>
        {/* Header */}
        <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
          <nav className="nav">
            <div className="logo">
              <Sun style={{ width: '32px', height: '32px', color: scrolled ? '#EAB308' : 'white' }} />
              <span className="logo-text" style={{ color: scrolled ? '#111827' : 'white' }}>
                EcoInova
              </span>
            </div>

            <div className="menu-desktop">
              {['Sobre', 'Valores', 'Equipe', 'Contato'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="menu-link"
                  style={{ color: scrolled ? '#374151' : 'white' }}
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-button"
            >
              {isMenuOpen ?
                <X style={{ color: scrolled ? '#111827' : 'white' }} /> :
                <Menu style={{ color: scrolled ? '#111827' : 'white' }} />
              }
            </button>
          </nav>

          {isMenuOpen && (
            <div className="mobile-menu">
              {['Sobre', 'Valores', 'Equipe', 'Contato'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </header>

        {/* Hero */}
        <section className="hero">
          <div className="hero-bg">
            <div className="hero-overlay"></div>
          </div>

          <div className="hero-content">
            <div className="badge">
              <span className="badge-text">Energia Limpa para Todos</span>
            </div>

            <h1 className="hero-title">
              Democratizando o<br />Acesso à Energia Solar
            </h1>

            <p className="hero-subtitle">
              Nossa Missão: Tornar a energia limpa acessível para cada brasileiro
            </p>

            <p className="hero-vision">
              Visão: Ser líder em soluções de energia solar residencial até 2030
            </p>

            <div className="cta-buttons">
              <button className="btn-primary">
                Faça um Orçamento Gratuito
                <ChevronRight />
              </button>
              <button className="btn-secondary">
                Conheça Nossas Soluções
              </button>
            </div>
          </div>

          <div className="scroll-indicator">
            <ChevronRight style={{ width: '32px', height: '32px', color: 'white', transform: 'rotate(90deg)' }} />
          </div>
        </section>

        {/* Nossa História */}
        <section id="sobre" className="section section-bg-light">
          <div className="container">
            <div className="section-title">
              <h2>Nossa História</h2>
              <div className="title-underline"></div>
            </div>

            <div className="historia-text">
              <p>
                Fundada em 2020, a EcoInova nasceu da visão compartilhada de engenheiros e ambientalistas
                que acreditavam que a energia solar não deveria ser um privilégio de poucos. Começamos com
                uma pequena equipe em São Paulo e o sonho de tornar a energia limpa verdadeiramente acessível
                para residências e pequenos comércios brasileiros.
              </p>
              <p>
                Hoje, somos uma das startups de energia renovável que mais cresce no país, com milhares de
                clientes satisfeitos e uma missão inabalável: democratizar o acesso à energia solar no Brasil.
              </p>
            </div>

            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-card">
                    <div className="timeline-year">{item.year}</div>
                    <p className="timeline-event">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Valores */}
        <section id="valores" className="section">
          <div className="container">
            <div className="section-title">
              <h2>Nossos Valores</h2>
              <div className="title-underline"></div>
              <p className="section-subtitle">
                Os princípios que guiam cada decisão e cada projeto que realizamos
              </p>
            </div>

            <div className="valores-grid">
              {valores.map((valor, index) => (
                <div key={index} className="valor-card">
                  <div className="valor-icon">{valor.icon}</div>
                  <h3 className="valor-title">{valor.title}</h3>
                  <p className="valor-description">{valor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section id="equipe" className="section section-bg-light">
          <div className="container">
            <div className="section-title">
              <h2>Conheça Nossa Equipe</h2>
              <div className="title-underline"></div>
              <p className="section-subtitle">
                Profissionais apaixonados por sustentabilidade e inovação
              </p>
            </div>

            <div className="equipe-grid">
              {equipe.map((member, index) => (
                <div key={index} className="member-card">
                  <div className="member-image-container">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="member-image"
                    />
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="cta-section">
          <div className="container">
            <Target className="cta-icon" />
            <h2 className="cta-title">
              Pronto para Economizar com Energia Solar?
            </h2>
            <p className="cta-text">
              Faça parte da revolução da energia limpa. Solicite um orçamento gratuito
              e descubra quanto você pode economizar.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">
                Solicitar Orçamento Gratuito
              </button>
              <button className="btn-secondary">
                Falar com Especialista
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contato" className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <div className="footer-logo">
                  <Sun style={{ width: '32px', height: '32px', color: '#EAB308' }} />
                  <span style={{ fontSize: '24px', fontWeight: 'bold' }}>EcoInova</span>
                </div>
                <p className="footer-text">
                  Democratizando o acesso à energia limpa no Brasil.
                </p>
              </div>

              <div>
                <h4 className="footer-title">Contato</h4>
                <p className="footer-text">contato@ecoinova.com.br</p>
                <p className="footer-text">(11) 3000-0000</p>
                <p className="footer-text">São Paulo, SP</p>
              </div>

              <div>
                <h4 className="footer-title">Siga-nos</h4>
                <div className="footer-links">
                  <a href="#" className="footer-link">LinkedIn</a>
                  <a href="#" className="footer-link">Instagram</a>
                  <a href="#" className="footer-link">Facebook</a>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p>&copy; 2025 EcoInova Ltda. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}