import React from 'react'
import style from '../src/styles/components/Header.module.scss'
import Image from 'next/image'
import logo from '../public/img/logo.png'
//import logo from '../public/tuLogo.svg'
import arrow from '../public/img/arrow.png'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header_content}>
        <div className={style.img}>
          <Image
            src={logo}
            alt='El mejor logo'
            width={180}
          />
        </div>
        <div className={style.title}>
          <h1 >¡Sabor que despierta tus sentidos!</h1>
          <p>
            Descubre el sabor auténtico en nuestro restaurante.
          </p>
        </div>
        
        <div className={style.arrow}>
          <Image
            src={arrow}
            width={80}
            height={25}
            alt='indicador desplazar hacia abajo'
          />
        </div>
      </div>
    </header>
  )
}

export default Header 
