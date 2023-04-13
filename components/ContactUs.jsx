import React from 'react'
import styles from '../src/styles/components/ContactUs.module.scss'

const ContactUs = () => {
  return (
    <section className={styles.contact_content}>
      <div className={styles.content_from}>
        <h2>Contáctanos</h2>
        <form action='#' className={styles.form}>
          <input 
            type='text' 
            placeholder='Nombre' 
            className={styles.input}
          />
          <input 
            type="email" 
            placeholder='Email' 
            className={styles.input}
          />
          <textarea 
            name='mesaje' 
            id='1' 
            cols='30' 
            rows='10'
            placeholder='Estamos para servirte'
          >

          </textarea>
          <input 
            type="submit" 
            value="Enviar" 
            className={styles.form_btn}
          />
        </form>
      </div>
    </section>
  )
}

export default ContactUs
