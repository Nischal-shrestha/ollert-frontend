import React from 'react'
import s from './index.module.scss'

export default function Card () {
  return (
    <div className={s.container}>
      <div className={s.cardLabel}>Mobile</div>
      <div className={s.cardTitle}>Card</div>
    </div>
  )
}
