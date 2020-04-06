import React from 'react'
import s from './index.module.scss'
import AddItem from 'components/AddItem'

export default function List ({ children }) {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.headerContainer}>
          <h2 className={s.header}>Doing</h2>
        </div>
        <div className={s.cards}>{children}</div>
      </div>
      <AddItem text='Add another card' />
    </div>
  )
}
