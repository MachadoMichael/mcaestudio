import './style.css'
import Logo from '../../mcalogo.svg'
import { useNavigate } from 'react-router-dom'
export const Navbar = () => {
  const pageList = ['conceito', 'sobre', 'contato']
  const navigate = useNavigate()

  return <div className="nav-container">
    <div className='nav-box-margin'>
      <div className="logo-box" onClick={() => navigate('/')}>
        <img className='logo' src={Logo} alt='MCA estudio logo' />
      </div>
      <ul>
        {
          pageList.map((page, i) => <li onClick={() => navigate(`/${page}`)} key={i}>
            {page}
          </li>)
        }
      </ul>
    </div>
  </div>
}
