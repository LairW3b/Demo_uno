import Image from "next/image"
import parrillada from '../public/img/parrilladaUno.jpg'
import style from '../src/styles/components/Galery.module.scss'
import 'aos/dist/aos.css'; 

const GaleryRt = () => {
  return (
    <div className={`${style.galery_item} `}>
      <div className={style.galery_text}>
        <h2> Muestra tus productos o servicios 🤤</h2>
        <p>
          De la vista nace el amor, por ello incluyo esta sección donde puedes 
          mostrar tus productos, servicios o promociones, para que tus clientes no 
          duden en contactarte.<br></br>
          (Puede incluir cuatro imagenes con su respectiva descripción)
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
