import MainImage from '../MainImage/MainImage'
import Navbar from '../Navbar/Navbar'
import style from './Header.module.css'
const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header_container}>
        <Navbar />
      </div>
      <MainImage />
    </div>
  )
}
export default Header
