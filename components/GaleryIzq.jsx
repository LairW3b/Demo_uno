import Image from "next/image"
import style from "../src/styles/components/Galery.module.scss"
import parrillada from '../public/img/parrilladaDos.jpg'
import 'aos/dist/aos.css';

const GaleryIzq = props => {
  return (
    <div className={style.galery_item}>
      <div className={style.galery_text}>
        <h2>Nuestras Delicias 🤤</h2>
        <p>
          Un buen corte de carne debe ser cuidadosamente seleccionado y preparado 
          con habilidad y dedicación. Cada bocado debe ser una experiencia culinaria 
          única que despierte tus sentidos y te haga apreciar los sabores de la carne 
          en su máxima expresión.
        </p>
      </div>
      <div 
        className={style.galery_img}
        data-aos='fade-left' 
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <Image
          src={parrillada}
          width={700}
          alt='foto corte de carne'
          className={style.img}
        />
      </div>
      {/*"identar= gg=G"*/}
    </div> 
  )
}

export default GaleryIzq
