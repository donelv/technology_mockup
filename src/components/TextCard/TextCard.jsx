import Button from '../Button/Button'
import style from './TextCard.module.css'
const TextCard = (props) => {
  return (
    <div className={style.textCard}>
      <div className={style.textCard_header}>
        <h2 style={{ fontSize: props.headerFontSize }}>{props.header}</h2>
        {props.dop_header && <p>{props.dop_header}</p>}
      </div>
      <p className={style.textCard_p}>
        Nulla placerat mi vitae mauris varius consequat. Aliquam libero ante,
        consectetur at turpis sit amet, congue Suspendisse porta bibendum
        scelerisque.
      </p>
      <p className={style.textCard_p}>
        Suspendisse porta bibendum scelerisque. Nulla placerat
      </p>
      {props.buttonText && (
        // <button className={`${style.btn} ${style.textCard_btn}`}>
        //   LEARN MORE
        // </button>
        <Button className={style.textCard_btn}>LEARN MORE</Button>
      )}
    </div>
  )
}
export default TextCard
