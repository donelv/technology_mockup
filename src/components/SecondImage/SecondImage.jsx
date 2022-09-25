import secondImage from '../../assets/img/secondImage.png'
import style from './SecondImage.module.css'
const SecondImage = () => {
  return (
    <div className={style.secondImage}>
      <img src={secondImage} alt="Unique Exp" />
      <div className={style.secondImage_text}>
        <h2>
          UNIQUE
          <br /> EXPERIENCES
        </h2>
        <p>THE NEXT LEVEL</p>
      </div>
    </div>
  )
}
export default SecondImage
