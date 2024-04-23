import './about.css'
import { Navbar } from "../../components/navbar"
import aboutImage from "../../photos/about.webp"
import { Info } from "../../components/photo-info/info.js"
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const About = () => {
  return <div className="about-container">
    <Navbar />
    <section className="about-content">
      <div className="about-image">
        <LazyLoadImage className='about-photo' src={aboutImage} alt="about" />
        <Info architect={"Florense"} companyPlace={"Flores da Cunha"} localization={"São Paulo"} />
      </div>
      <div className="about-text-box">
        <h1> As imagens podem ser tudo, nunca só registro.</h1>
        <div className="about-text">
          <p>
            a arquitetura que exibe o tempo na sua estrutura imponente para ser avistada de pontos da urbe.
          </p>
          <p>
            Entre os segmentos atendidos estão escritórios de arquitetura e decoração, paisagistas, hotéis, construtoras, lojas, restaurantes... Todos aqueles que acreditam que o olhar do MCA pode acrescentar valor aos seus projetos e suas marcas.
          </p>
        </div>
      </div>
    </section>
  </div>
}
