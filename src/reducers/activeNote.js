import {
  EDIT_NOTE,
  SET_ACTIVE_NOTE,
  TOGGLE_FAVORITE
} from '../constants'

// const state = {
//   notes: [], // 所有笔记
//   activeNote: {} // 当前笔记
// }

const activeNote = (activeNote = {}, action) => {
  switch (action.type) {
    case EDIT_NOTE:
      return activeNote.text = action.text
    case SET_ACTIVE_NOTE:
      return action.activeNote
    case TOGGLE_FAVORITE:
      return Object.assign({}, activeNote, { favorite: !activeNote.favorite})
    default: 
      return activeNote
  }
}

export default activeNote
