import './style.css'
import Logo from '../../mcalogo.svg'
export const Navbar = () => {
  const pageList = ['sobre', 'contato']

  return <div className="nav-container">
    <div className='nav-box-margin'>
      <div className="logo-box">
        <img className='logo' src={Logo} />
      </div>
      <ul>
        {
          pageList.map((page, i) => <li key={i}>
            {page}
          </li>)
        }
      </ul>
    </div>
  </div>
}
