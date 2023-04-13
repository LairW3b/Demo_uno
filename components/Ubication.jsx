import React from 'react'
import style from '../src/styles/components/Ubication.module.scss'

const Ubication = () => {
  return (
    <section className={style.ubication_content}>
      <h2>Visitanos</h2>

      <div className={style.div_frame}>
        <div className={style.frame_content}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15083.437182671254!2d-98.119574!3d19.069923!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfea6f7443f1e5%3A0x87b94938b6af062d!2sMarisquer%C3%ADa%20Don%20Cangrejo!5e0!3m2!1ses!2smx!4v1681346001329!5m2!1ses!2smx" 
            //width="360" 
            //height="200" 
            //allowfullscreen="" 
            loading="lazy" 
            className={style.iframe}
          ></iframe>
        </div>
        <p>
          ¡Los esperamos en nuestro Asador! Disfruten de una deliciosa 
          comida preparada con ingredientes frescos y de alta calidad. 
          Ambiente acogedor y bebidas seleccionadas para acompañar su comida. 
          ¡No esperen más para visitarnos!
        </p>
      </div>
    </section>
  )
}

export default Ubication
