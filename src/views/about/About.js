import './about.css'
import { Navbar } from "../../components/navbar"

export const About = () => {
  return <div className="about-container">
    <Navbar />
    <section className="about-content">
      <div className="about-image"></div>
      <div className="about-text-box">
        <h1> As imagens podem ser tudo, nunca só registro.</h1>
        <div className="about-text">
          <p>
            A lente mira para a intimidade de uma vida, para um espaço pensado para confraternizar existências. Ou mesmo para a arquitetura que exibe o tempo na sua estrutura imponente para ser avistada de pontos da urbe.
          </p>
          <p>
            Há histórias sempre na órbita de um fotógrafo. Há miudezas sobrevoando os seus olhos, a sua pele. Um corpo que sente por inteiro para assim enquadrar a parte de uma paisagem, um capítulo do ordinário. Dependendo da sensibilidade; o extraordinário.
          </p>
          <p>
            Dos lares com suas frestas abertas em janelas e varandas para que as pupilas dos habitantes alcancem o azul intenso do oceano, do céu. Também os feixes luminosos solares fazedores de sombras brincalhonas e geometrias efêmeras no espaço.
          </p>
          <p>
            A vida flui nas minúcias perceptíveis e outras nem tanto. Mas cabe ao fotógrafo perceber, prenunciar a matéria que o envolve. A vivência revelada numa metragem. A silhueta do mobiliário que vira poesia. As flores descansadas em vasos. Os livros sobrepostos em (des)ordem. Os objetos espalhados a contar uma narrativa.
          </p>
          <p>
            Quem não precisa de beleza, encharcar-se com a demora de um olhar, com o prazer invisível e visível? Avistar uma cena demarcada pela subjetividade de quem pisa naquele chão...
          </p>
          <p>
            Traduzir a luz do sol. Esperá-lo forjar sua cena, os climas e atmosferas ajustados com sua presença. Seduzi-lo. Não é questão de tempo, somente busca por outras consciências de visão.
          </p>
          <p>
            As imagens podem ser tudo! Tudo mesmo que se fabula, se cultiva no dia a dia, se capta com o olhar e a lente. Mas nunca serão só um registro.
          </p>
        </div>
        <div id='about-writer'>Lu de Moraes</div>
      </div>
    </section>
  </div>
}
