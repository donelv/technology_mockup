import Button from '../Button/Button'
import style from './Footer.module.css'
import phone from '../../assets/img/phone.svg'
import email from '../../assets/img/email.svg'
import address from '../../assets/img/address.svg'
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.topText}>
        <h2>SUPPORT</h2>
        <p>GET IN TOUCH</p>
      </div>
      <form className={style.form}>
        <div className={style.inputWrapper}>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Phone" />
          <input placeholder="Message" />
        </div>
        <Button>SEND</Button>
      </form>
      <div className={style.bottom}>
        <div className={style.bottomCards}>
          <img src={phone} alt="phone" />
          <div>
            <a href="tel:+167712444225">1-677-124-44225</a>
            <a href="tel:+167712444225">1-677-124-44225</a>
            <a href="tel:+167712444225">1-677-124-44225</a>
          </div>
        </div>
        <div className={style.bottomCards}>
          <img src={email} alt="email" />
          <div>
            <a href="mailto:office@bridge.com">office@bridge.com</a>
            <a href="mailto:service@bridge.com">service@bridge.com</a>
            <a href="mailto:shop@bridge.com">shop@bridge.com</a>
          </div>
        </div>
        <div className={style.bottomCards}>
          <img src={address} alt="address" />
          <div>
            <a href="http://maps.google.com/?q=130 New York, NY, 130 William St, 10038">
              New York
              <br />
              Bridgestone side 130 <br />
              NY
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
