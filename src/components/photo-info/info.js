import './info.css'

export const Info = ({ client, localization, company }) => {
  return <div className="info-container">
    <div className="first-info">{client}, {localization}</div>
    <div className="second-info">{company}</div>
  </div>
}
