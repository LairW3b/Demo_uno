import Image from "next/image"
import parrillada from '../public/img/parrilladaUno.jpg'
import style from '../src/styles/components/Galery.module.scss'
import 'aos/dist/aos.css'; 

const GaleryRt = () => {
  return (
    <div className={`${style.galery_item} `}>
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
        className={`${style.galery_img} ${style.galery_img_rigth}`}
        data-aos='fade-right'
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
    </div> 
  )
}

export default GaleryRt
