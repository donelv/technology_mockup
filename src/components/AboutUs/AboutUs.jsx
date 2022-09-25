import CardList from '../CardList/CardList'
import style from './AboutUs.module.css'
import image from '../../assets/img/aboutUsImage.png'
import TextCard from '../TextCard/TextCard'
const PercentageLine = (props) => {
  return (
    <div className={style.percentageComponent}>
      <div className={style.percentageComponent_top}>
        <h4>{props.text}</h4>
        <p>{props.percentage}%</p>
      </div>

      <div className={style.percentageComponent_bottom}>
        <div
          className={style.fullLine_color}
          style={{
            width: props.percentage + '%',
            backgroundColor: props.color,
          }}
        ></div>
      </div>
    </div>
  )
}
const AboutUs = () => {
  return (
    <div>
      <div className={style.cardList_wrapper}>
        <CardList />
      </div>

      <div className={style.about}>
        <div className={style.about_img}>
          <img src={image} alt="about" />
        </div>
        <TextCard
          header="ABOUT US"
          dop_header="TECHNOLOGY"
          buttonText="LEARN MORE"
        />
        <TextCard
          header="WE WORK WITH BIG AND SMALL COMPANIES"
          headerFontSize="40px"
        />
        <div className={style.percentage}>
          <PercentageLine
            percentage={92}
            text="App Development"
            color="#F2662F"
          />
          <PercentageLine
            percentage={88}
            text="User Interface"
            color="#FA2B7E"
          />
          <PercentageLine
            percentage={95}
            text="User Experiences"
            color="#23DDAC"
          />
          <PercentageLine
            percentage={50}
            text="Information Architecture"
            color="#076CF0"
          />
        </div>
      </div>
    </div>
  )
}
export default AboutUs
