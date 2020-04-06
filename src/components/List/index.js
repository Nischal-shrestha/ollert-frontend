import React, { useState } from 'react'
import s from './index.module.scss'
import AddItem from 'components/AddItem'
import { CardComposer } from '../Card'

export default function List ({ children }) {
  const [showCardComposer, setShowCardComposer] = useState(false)

  const handleAddCard = () => {
    setShowCardComposer(false)
    return
  }

  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.headerContainer}>
          <h2 className={s.header}>Doing</h2>
        </div>
        <div className={s.cards}>
          {children}

          {showCardComposer && (
            <CardComposer
              onAdd={handleAddCard}
              onClose={() => setShowCardComposer(false)}
            />
          )}
        </div>
      </div>
      {!showCardComposer && (
        <AddItem
          onClick={() => setShowCardComposer(true)}
          text='Add another card'
        />
      )}
    </div>
  )
}
