import { combineReducers } from 'redux'

import notes from './notes'
import activeNote from './activeNote'

const reducers = combineReducers({
  notes,
  activeNote
})

export default reducers