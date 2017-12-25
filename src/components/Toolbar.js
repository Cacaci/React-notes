import React from 'react'

const Toolbar = ({
  activeNote,
  handleAdd,
  handleDelete,
  handleFavorite
}) => {
  return (
    <div id="toolbar">
      <i onClick={() => handleAdd()} className="glyphicon glyphicon-plus"></i>
      <i className={activeNote.favorite ? 'starred' : ''} className="glyphicon glyphicon-star"></i>
      <i onClick={(id) => handleDelete(id)} className="glyphicon glyphicon-remove"></i>
    </div>
  )
}

export default Toolbar

// import React, { Component } from 'react'

// export default class Toolbar extends Component {
//   constructor (props) {
//     super(props)
//   }
//   componentDidMount () {
//     console.log(this.props)
//   }
//   render () {
//     const { handleAdd, activeNote, deleteNote, toggleFavorite } = this.props
//     return (
//       <div id="toolbar">
//         <i onClick={() => handleAdd()} className="glyphicon glyphicon-plus"></i>
//         {/* <i onClick={() => console.log('1')} className="glyphicon glyphicon-plus"></i> */}
//         <i className={activeNote.favorite ? 'starred' : ''} className="glyphicon glyphicon-star"></i>
//         <i onClick={(id) => deleteNote(id)} className="glyphicon glyphicon-remove"></i>
//       </div>
//     )
//   }
// }
