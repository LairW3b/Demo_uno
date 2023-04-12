import Image from "next/image"
//import styles from "../src/styles/components/Galery.module.scss"
import style from "../src/styles/components/GaleryIzq.module.scss"
import parrillada from '../public/img/parrilladaDos.jpg'

const GaleryIzq = props => {
  return (
    <div className={style.galery_Izq}>
      <div className={style.galery_text}>
        <h2>Nuestras Delicias 🤤</h2>
        <p>
          Un buen corte de carne debe ser cuidadosamente seleccionado y preparado 
          con habilidad y dedicación. Cada bocado debe ser una experiencia culinaria 
          única que despierte tus sentidos y te haga apreciar los sabores de la carne 
          en su máxima expresión.
        </p>
      </div>
      <div className={style.galery_img}>
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
