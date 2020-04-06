import React from 'react'
import s from './index.module.scss'
import { Add } from 'components/Icons'

export default function Board ({ children }) {
  return (
    <div>
      <div className={s.headerContainer}>
        <div className={s.headerLeftContainer}>
          <button className={s.menuButton}>
            <span className={s.icon}>
              <Add />
            </span>
            <span className={s.text}>Boards</span>
          </button>
          <button className={s.menuButton}>
            <span className={s.icon}>
              <Add />
            </span>
          </button>
        </div>
        <div>
          <button className={s.menuButton}>
            <span className={s.icon}>
              <Add />
            </span>
          </button>
        </div>
      </div>
      <div className={s.boardHeaderContainer}>
        <div className={s.boardHeader}>Ollert</div>
      </div>
      <div className={s.lists}>{children}</div>
    </div>
  )
}
