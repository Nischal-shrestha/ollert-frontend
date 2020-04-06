import React from 'react'
import s from './index.module.scss'
import { Add } from 'components/Icons'

export default function AddItem ({ type, text }) {
  return (
    <div className={`${s.container} ${type === 'list' && s.list}`}>
      <Add />
      {text}
    </div>
  )
}
