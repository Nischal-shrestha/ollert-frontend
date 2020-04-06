import * as a from './types'
import { createAction } from '../helpers/actionHelper'

export const addCard = createAction(a.ADD_CARD)
export const addList = createAction(a.ADD_LIST)
export const addBoard = createAction(a.ADD_BOARD)
