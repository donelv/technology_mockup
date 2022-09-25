import style from './Card.module.css'

const Card = (props) => {
  return (
    <>
      <div
        className={style.card}
        style={{
          width: props.width,
          boxShadow: `0 15px 60px 0 ${props.color}`,
        }}
      >
        <div className={style.card_img}>
          <img src={props.img} alt={props.name} />
        </div>
        <p className={style.card_name}>{props.name}</p>
        <p className={style.card_description}>{props.description}</p>
      </div>
    </>
  )
}
export default Card
