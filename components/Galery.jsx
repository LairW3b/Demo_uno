import React from 'react'
import style from '../src/styles/components/Galery.module.scss'
import GaleryIzq from './GaleryIzq'
import GaleryRt from './GaleryRt'

const Galery = () => {
  return (
    <section className={style.galery_content}>
      <GaleryIzq />
      <GaleryRt />
    </section>
  )
}

export default Galery
