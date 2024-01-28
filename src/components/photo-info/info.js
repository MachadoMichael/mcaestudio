import './info.css'

export const Info = ({ architect, localization, companyPlace }) => {
  return <div className="info-container">
    <div className="first-info">{architect}, {companyPlace}</div>
    <div className="second-info">{localization}</div>
  </div>
}
