import React from 'react'
import s from './index.module.scss'
import { Add } from '../Icons'

export default function Card () {
  return (
    <div className={s.card}>
      <div className={s.cardLabel}>Mobile</div>
      <div className={s.cardTitle}>Card</div>
    </div>
  )
}

export const CardComposer = ({ onAdd, onClose }) => {
  return (
    <div className={s.composer}>
      <div className={s.card}>
        <textarea
          className={s.text}
          placeholder='Enter the title for this card...'
        />
      </div>
      <div className={s.controlBar}>
        <button className={s.btn} onClick={onAdd}>
          Add Card
        </button>
        <div role='button' className={s.closeBtn} onClick={onClose}>
          <Add />
        </div>
      </div>
    </div>
  )
}
