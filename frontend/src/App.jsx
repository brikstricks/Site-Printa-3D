import './App.css'

function App() {
  return (
    <main className="pagina-inicial">
      <header className="cabecalho">
        <a className="marca" href="/">
          Printaí <span>3D</span>
        </a>

        <nav className="navegacao">
          <a href="/">Início</a>
          <a href="/portfolio/">Portfólio</a>
          <a href="/sobre/">Sobre</a>
          <a href="/contato/">Contato</a>
        </nav>
      </header>

      <section className="hero">
        <p className="subtitulo">IMPRESSÃO 3D PERSONALIZADA</p>

        <h1>
          Suas ideias
          <br />
          <span>Impressas em 3D</span>
        </h1>

        <p className="descricao">
          Protótipos, peças personalizadas e soluções criativas para transformar ideias em objetos reais
        </p>

        <a className="botao-portfolio" href="/portfolio/">
          Conheça nosso portfólio
        </a>
      </section>

      <section className="servicos">
        <article className="servico">
          <h2>Protótipos</h2>
          <p>Transforme seus projetos em modelos físicos.</p>
        </article>

        <article className="servico">
          <h2>Peças personalizadas</h2>
          <p>Soluções sob medida para diferentes necessidades.</p>
        </article>

        <article className="servico">
          <h2>Projetos criativos</h2>
          <p>Dê forma às suas ideias com impressão 3D.</p>
        </article>
      </section>

      <footer className="rodape">
        <p>Printaí 3D - Suas ideias impressas em 3D - Printaí pra gente vê.</p>
      </footer>
    </main>
  )
}

export default App