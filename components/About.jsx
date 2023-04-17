import React from 'react'
import style from '../src/styles/components/About.module.scss'
import Image from 'next/image'
import cubiertos from '../public/img/cubiertos2.png'
//import cubiertos from '../public/img/cubiertosUno.png'
import carne from '../public/img/carnita.jpg'

const About = () => {
  return (
    <section className={style.about_content}>
      <div className={style.about_img}>
        <Image
          src={cubiertos}
          width={100}
          alt='cubiertos'
        />
      </div>

      <Image 
        src={carne}
        alt='carne asadea'
        className={style.img_bg}
      />

      <div className={style.about_text}>
        <h2>¡Bienvenido a futura landing page!</h2>
        <p>
          En esta sección puedes dar a conocer los lo que concideres relevante de tu negocio 
          o emprendimeinto ejemplo:
        </p>
        <p>
          En nuestro restaurante ofrecemos una experiencia culinaria única y deliciosa 
          para satisfacer todos los paladares. 
          Nuestro menú cuidadosamente elaborado ofrece una gran variedad de platillos 
          frescos y de alta calidad, que fusionan 
          sabores y aromas de diferentes partes del mundo.
        </p>

      </div>
    </section>
  )
}

export default About
