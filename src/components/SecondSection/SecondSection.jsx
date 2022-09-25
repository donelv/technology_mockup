import style from './SecondSection.module.css'
import firstImage from '../../assets/img/secondSectFirstImage.png'
import secondImage from '../../assets/img/secondSectSecondImage.png'
import TextCard from '../TextCard/TextCard'
import CardList from '../CardList/CardList'
import adobe from '../../assets/img/adobe.png'
import wordpress from '../../assets/img/wordpress.png'
import jquery from '../../assets/img/jquery.png'
import envato from '../../assets/img/envato.png'
import icon1 from '../../assets/img/icon1-2.svg'
import icon2 from '../../assets/img/icon2-2.svg'
import icon3 from '../../assets/img/icon3-2.svg'
import Card from '../Card/Card'
const SecondSection = () => {
  return (
    <div>
      <div className={style.secondSection}>
        <TextCard
          header="BE UNIQUE"
          dop_header="PEOPLE REALLY MATTER"
          buttonText="LEARN MORE"
        />
        <div className={style.secondSection_img}>
          <img src={firstImage} alt="about" />
        </div>
        <div className={style.secondSection_img}>
          <img src={secondImage} alt="about" />
        </div>
        <TextCard
          header="PRODUCTS"
          dop_header="LATEST FEATURES"
          buttonText="LEARN MORE"
        />
      </div>
      <div className={style.workWith}>
        <div className={style.workWith_img}>
          <img src={adobe} alt="Adobe" />
        </div>
        <div className={style.workWith_img}>
          <img src={wordpress} alt="WordPress" />
        </div>
        <div className={style.workWith_img}>
          <img src={jquery} alt="JQuery" />
        </div>
        <div className={style.workWith_img}>
          <img src={envato} alt="Envato" />
        </div>
      </div>
      <div className={style.cardList_wrapper}>
        <Card
          img={icon1}
          name="EASY IMPORT"
          description="Nulla placerat mi vitae mauris
varius . Aliquam libero ante,
consectetur at."
          color="#4091FBCC"
          width="350px"
        />
        <Card
          img={icon2}
          name="Stunning Layouts"
          description="Nulla placerat mi vitae mauris
varius . Aliquam libero ante,
consectetur at."
          color="#7FE7C6CC"
          width="350px"
        />
        <Card
          img={icon3}
          name="No Coding"
          description="Nulla placerat mi vitae mauris
varius . Aliquam libero ante,
consectetur at."
          color="#DF8CC4CC"
          width="350px"
        />
      </div>
    </div>
  )
}
export default SecondSection
