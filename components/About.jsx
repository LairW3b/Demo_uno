import React from 'react'
import style from '../src/styles/components/About.module.scss'
import Image from 'next/image'
import cubiertos from '../public/img/cubiertos2.png'

const About = () => {
  return (
    <section className={style.about_content}>
      <div className={style.about_img}>
        <Image
          src={cubiertos}
          width={80}
          alt='cubiertos'
        />
      </div>

      <h2>¡Bienvenidos al restaurante más delicioso de la ciudad!</h2>
      
      <p>
        En nuestro restaurante ofrecemos una experiencia culinaria única y deliciosa 
        para satisfacer todos los paladares. 
        Nuestro menú cuidadosamente elaborado ofrece una gran variedad de platillos 
        frescos y de alta calidad, que fusionan 
        sabores y aromas de diferentes partes del mundo.
      </p>
      <p>
        Nuestro servicio excepcional y nuestro ambiente acogedor y amigable le 
        brindarán una experiencia única e inolvidable. ¡Venga a visitarnos y pruebe 
        la mejor comida en nuestra ciudad!
      </p>
      {/* 
        header main 
        presentación, description
        personal*
        mini galery
        testimonios 
        ubicación como llegar
        contacto
        footer-social media
      */}
    </section>
  )
}

export default About
