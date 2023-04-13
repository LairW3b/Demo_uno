import styles from '../src/styles/components/Fotter.module.scss'
import logo from '../public/img/logo.png'
import Image from 'next/image'
import { 
  FaInstagramSquare,
  FaFacebookSquare,
  FaTiktok,
  FaDirections, 
  FaPhoneSquareAlt, 
  FaAt, 
  FaClock } from 'react-icons/fa'

const Fotter = () => {
  return (
    <footer className={styles.footer_content}>
      {/*footer info*/}
      <div className={styles.footer_info_content}>
        {/*<div className={styles.content_logo}>*/}
        <Image 
          src={logo}
          className={styles.footer_logo}
          alt='logotipo rstaurante'
        /> 
        {/*</div>*/}
        <div className={styles.footer_info}>
          <div>
            <p>
              <FaDirections
                className={styles.icons}
              /> 
              C. Villa Unión 10246, Villa Guadalupe, 72229 Puebla, Pue.
            </p>
          </div>
          <div>
            <p>
              <FaPhoneSquareAlt 
                className={styles.icons}
              /> 
              2222334455
            </p>
          </div>
          <div>
            <p>
              <FaAt 
                className={styles.icons}
              />
              asadero@asadero.com
            </p>
          </div>
          <div>
            <p>
              <FaClock 
                className={styles.icons}
              />
              Horario de atención: <span>12:00pm</span> a <span>10:00pm</span>
            </p>
          </div>
        </div>
      </div>

      {/*social media*/}
      <div className={styles.social_media}>
        <div>
          <a href="#"><FaFacebookSquare/></a>
        </div>
        <div>
          <a href="#"><FaInstagramSquare/></a>
        </div>
        <div>
          <a href='#'><FaTiktok/></a>
        </div>
      </div>
      {/*información de contacto:
          1.Dirección
          2.Número de telefono
          3.Correo electrónico
          4.Horario de atención
          5.Enlacens a redes sociales
          6.Información legal
          */}
    </footer>
  )
}

export default Fotter
