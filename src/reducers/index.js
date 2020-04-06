import * as a from '../actions/types'

const initialState = {
  board: {
    name: 'Ollert',
    lists: [
      {
        title: 'Doing',
        cards: [{ title: 'ABC' }, { title: 'XYZ' }]
      },
      {
        title: 'Done',
        cards: [
          { title: 'YZ' },
          { title: 'PQR' },
          { title: 'STU' },
          { title: 'VWX' }
        ]
      }
    ]
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case a.ADD_CARD:
      return state
    case a.ADD_BOARD:
      return state
    case a.ADD_LIST:
      return state
  }
}
