import logo from '../../assets/img/logo.svg'
import style from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className="navbar_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className={style.navbarList}>
        <a href="#home" className={style.navbarList_active}>
          Home
        </a>
        <a href="#about">About as</a>
        <a href="#service">Service</a>
        <a href="#products">Products</a>
        <a href="#people">People</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}
export default Navbar
