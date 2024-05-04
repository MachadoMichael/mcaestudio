import './style.css'
import Logo from '../../mcalogo.svg'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
  const pageList = ['conceito', 'sobre', 'contato']
  const navigate = useNavigate();
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  const handleOpenMenu = () => navigate("/mobile-menu")

  return <div className="nav-container">
    <div className='nav-box-margin'>
      <div className="logo-box" onClick={() => navigate('/')}>
        <img className='logo' src={Logo} alt='MCA estudio logo' />
      </div>
      {
        isMobile ?
          <div onClick={handleOpenMenu} id='navbar-menu-button'>
            <MenuIcon id="sidebar-icon" fontSize='large' />
          </div>

          :
          <ul>
            {pageList.map((page, i) => <li onClick={() => navigate(`/${page}`)} key={i}>
              {page}
            </li>)
            }
          </ul>
      }
    </div>
  </div>
}
