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
        <div id="about-image-text">Denilson Machado e Juliano Colodeti</div>
      </div>
      <div className="about-text-box">
        <h1> As imagens podem ser tudo, nunca só registro.</h1>
        <div className="about-text">
          <p>Formado pelos fotógrafos e sócios, Denilson Machado e Juliano Colodeti, o MCA Estúdio é especializado em fotografia de arquitetura e interiores. Essa parceria começou em 2000, ano de criação do estúdio, no Rio de Janeiro. Com o tempo, as fronteiras de atuação foram expandidas e a dupla registra projetos em todo o território nacional e até internacional.
            <p>Entre os segmentos atendidos estão escritórios de arquitetura e decoração, paisagistas, hotéis, construtoras, lojas, restaurantes... Todos aqueles que acreditam que o olhar do MCA pode acrescentar valor aos seus projetos e suas marcas.</p>
          </p>
        </div>
      </div>
    </section>
  </div>
}
