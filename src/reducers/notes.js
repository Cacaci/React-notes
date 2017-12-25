import { ADD_NOTE, DELETE_NOTE } from '../constants'

// const state = {
//   notes: [], // 所有笔记
//   activeNote: {} // 当前笔记
// }

let id = 0

const notes = (state = [{id: 0, text: 'New note', favorite: false}], action) => {
  const handleDelete = (arr, id) => { // 可以直接传一个数组的索引
    let index = arr.findIndex(ele => ele.id = id)
    return arr.splice(index, 1)
  }

  switch (action.type) {
    case ADD_NOTE: 
      return [
        ...state,
        Object.assign({}, {id: ++id}, {text: 'New note', favorite: false})
      ]
    case DELETE_NOTE:
      return handleDelete(state, action.id)
    default:
      return state
  }
}

export default notes
