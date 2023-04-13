import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react' 
import SwiperCore,{Autoplay} from 'swiper'
import 'swiper/css'
import style from '../src/styles/components/Testimonials.module.scss'
import chef from '../public/img/chef.png'
import cubiertos from '../public/img/cubiertosT.png'

const Testimonials = () => {

  SwiperCore.use([Autoplay])

  return (
    <section className={style.testimonials_content}>
      <h2> De Nuestros Comensales</h2>
      <Swiper
        autoplay={{
          delay:5000
        }}
      >
        <SwiperSlide>
          <div className={style.testimony}>
            <div>
              <Image
                src={chef}
                width={60}
                alt='sombrero de chef'
                className={style.testimony_img}
              />
            </div>
            <p>
              ¡Me encantó! La calidad de la carne 
              es excepcional y el sabor es espectacular. 
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.testimony}>
            <div>
              <Image
                src={chef}
                width={60}
                alt='cubiertos'
                className={style.testimony_img}
              />
            </div>
            <p>
              El servicio es excelente, siempre atentos y amables con los clientes, 
              ademas el ambiente es muy agradable y acogedor
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.testimony}`}>
            <div>
              <Image
                src={cubiertos}
                width={100}
                alt='cubiertos'
                className={style.testimony_img}
              />
            </div>
            <p>
              Perfecto para disfrutar de una buena comida en familia o con amigos. 
              ¡Definitivamente volveré a visitar este lugar!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      {/*crear el componente testimony y pasar por porps contenido*/}
    </section>
  )
}

export default Testimonials
