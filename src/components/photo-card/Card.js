import './card.css'

export const Card = ({ uri, text }) => {
  return <div id='card-container'>
    <img id='card-image' src={uri} />
    <div id='card-text'>{text}</div>
  </div>
}
