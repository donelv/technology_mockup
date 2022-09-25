import mainImage from '../../assets/img/mainImage.png'
import style from './MainImage.module.css'
const MainImage = ({ children }) => {
  return (
    <div className={style.mainImage}>
      <img src={mainImage} alt="Innovation" />
      {children}
      <div className={style.mainImage_text}>
        <h2>
          INNOVATION
          <br />
          THAT DRIVES
          <br />
          EMOTION
        </h2>
        <p>THE NEXT LEVEL</p>
      </div>
    </div>
  )
}
export default MainImage
