import "./menu.css"
import { useNavigate } from 'react-router-dom'

export const Menu = () => {
  const pageList = ['conceito', 'sobre', 'contato']
  const navigate = useNavigate()

  const handleNavigation = (page) => {
    navigate(`/${page}`)
  }
  return <div id="menu-container">
    <div id="menu-close-button" onClick={handleNavigation}>X</div>
    <ul id='menu-ul'>
      {
        pageList.map((page, i) => <li id='menu-li' onClick={() => handleNavigation(page)} key={i}>
          {page}
        </li>)
      }
    </ul>
  </div>


}
