import Card from '../Card/Card'
import style from './CardList.module.css'
import icon1 from '../../assets/img/icon1.svg'
import icon2 from '../../assets/img/icon2.svg'
import icon3 from '../../assets/img/icon3.svg'
import icon4 from '../../assets/img/icon4.svg'
const CardList = () => {
  return (
    <div className={style.cardlist}>
      <Card img={icon1} name="Countless Layout" color="#4091FB" width="250px" />
      <Card
        img={icon2}
        name="Easy to customize"
        color="#7FE7C6"
        width="250px"
      />
      <Card img={icon3} name="Live customizer" color="#DF8CC4" width="250px" />
      <Card img={icon4} name="Fully responsive" color="#F4A382" width="250px" />
    </div>
  )
}
export default CardList
