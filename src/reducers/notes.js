import {
  ADD_NOTE, 
  DELETE_NOTE,
  EDIT_NOTE,
  SET_ACTIVE_NOTE,
  TOGGLE_FAVORITE
} from '../constants'
import { stat } from 'fs';

const initState = {
  notes: [{id: 0, text: 'New note', favorite: false}], // 所有笔记
  activeNote: {} // 当前笔记
}

let id = 0

const notes = (state, action) => {
  const handleDelete = (arr, id) => { // 可以直接传一个数组的索引
    let index = arr.findIndex(ele => ele.id = id)
    return arr.splice(index, 1)
  }

  switch (action.type) {
    case ADD_NOTE: 
      let newNote = {id: ++id, text: 'New note', favorite: false}
      state.activeNote = newNote
      return [
        ...state,
        Object.assign({}, newNote.notes)
      ]
    case DELETE_NOTE:
      return handleDelete(state.notes, action.id)
    default:
      return state
  }
}

const activeNote = (activeNote, action) => {
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

const noteApp = (state = initState, action) => {
  return {
    notes: notes(state, action),
    activeNote: activeNote(state.activeNote, action)
  }
}

export default noteApp
