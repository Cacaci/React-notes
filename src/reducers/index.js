import {
  ADD_NOTE, 
  DELETE_NOTE,
  EDIT_NOTE,
  SET_ACTIVE_NOTE,
  TOGGLE_FAVORITE
} from '../constants'

const initState = {
  notes: [{id: 0, text: 'New note', favorite: false}], // 所有笔记
  activeNote: {id: 0, text: 'New note', favorite: false} // 当前笔记
}

let id = 0

const notes = (state = initState, action) => {
  const handleDelete = (notes, id) => { // 可以直接传一个数组的索引
    let index = notes.findIndex(note => note.id === id)
    notes.splice(index, 1)
    return Object.assign({}, {
      notes: [
        ...notes
      ],
      activeNote: notes[0] || []
    })
  }

  switch (action.type) {
    case ADD_NOTE: 
      let newNote = {id: ++id, text: 'New note', favorite: false}
      return Object.assign({}, state, {
        notes: [
          ...state.notes,
          newNote
        ],
        activeNote: newNote
      })
    case DELETE_NOTE:
      return handleDelete(state.notes, action.id)
    case EDIT_NOTE:
      return state.activeNote.text = action.text
    case SET_ACTIVE_NOTE:
      return Object.assign({}, state, {activeNote: action.note})
    case TOGGLE_FAVORITE:
      return Object.assign({}, state.activeNote, { favorite: !state.activeNote.favorite})
    default:
      return state
  }
}

// const activeNote = (activeNote = initState.activeNote, action) => {
//   switch (action.type) {
//     case EDIT_NOTE:
//       return activeNote.text = action.text
//     case SET_ACTIVE_NOTE:
//       return action.activeNote
//     case TOGGLE_FAVORITE:
//       return Object.assign({}, activeNote, { favorite: !activeNote.favorite})
//     default: 
//       return activeNote
//   }
// }

// const noteApp = (state = initState, action) => {
//   return {
//     notes: notes(state.notes, action),
//     activeNote: activeNote(state.activeNote, action)
//   }
// }

export default notes


// import { combineReducers } from 'redux'

// // import notes from './notes'
// // import activeNote from './activeNote'

// import notes from './notes'

// const reducers = combineReducers({
//   notes
//   // notes
//   // activeNote
// })

// export default reducers