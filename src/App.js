import React from 'react'
import Card from 'components/Card'
import List from 'components/List'
import Board from 'components/Board'
import './app.scss'
import AddItem from './components/AddItem'

function App () {
  return (
    <div className='App'>
      <Board>
        <List>
          <Card />
          <Card />
        </List>
        <List>
          <Card />
          <Card />
          <Card />
          <Card />
        </List>
        <List>
          <Card />
          <Card />
          <Card />
          <Card />
        </List>
        <AddItem type='list' text='Add another list' />
      </Board>
    </div>
  )
}

export default App
