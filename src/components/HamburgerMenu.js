import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'styles/hamburgerMenu.scss'
import Logo from 'assets/logo/logo.png'

const HamburgerMenu = ({ active, navigate }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [active])

  return (
    <div className={`menu ${open ? 'open' : ''}`}>
      <div className={`menu__icon`} onClick={() => setOpen((prev) => !prev)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <img
        className='logo'
        src={Logo}
        alt='Logo'
        onClick={() => navigate('/')}
      />

      <div className='menu__items'>
        <Link to={'/about'} className={active === '/about' ? 'active' : ''}>
          درباره ما
        </Link>
        <Link to={'/contact'} className={active === '/contact' ? 'active' : ''}>
          ارتباط با ما
        </Link>
      </div>
    </div>
  )
}

export default HamburgerMenu
