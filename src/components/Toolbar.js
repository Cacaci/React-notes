// import React from 'react'

// const Toolbar = ({
//   activeNote,
//   handleAdd,
//   handleDelete,
//   handleFavorite
// }) => {

//   const handleAddTest = () => {
//     console.log('添加笔记')
//   }

//   return (
//     <div id="toolbar">
//       {/* <i onClick={() => handleAdd()} className="glyphicon glyphicon-plus"></i> */}
//       <i onClick={() => handleAddTest()} className="glyphicon glyphicon-plus"></i>
//       <i className={activeNote.favorite ? 'starred' : ''} className="glyphicon glyphicon-star"></i>
//       <i onClick={(id) => handleDelete(id)} className="glyphicon glyphicon-remove"></i>
//     </div>
//   )
// }

// export default Toolbar

import React, { Component } from 'react'

export default class Toolbar extends Component {
  constructor (props) {
    super(props)
  }
  handleAddTest = () => {
    console.log('添加笔记')
  }
  componentDidMount () {
  }

  render () {
    const { handleAdd, activeNote, handleDelete, toggleFavorite } = this.props
    return (
      <div id="toolbar">
        <i onClick={() => handleAdd()} className="glyphicon glyphicon-plus"></i>
        {/* <i onClick={() => console.log('1')} className="glyphicon glyphicon-plus"></i> */}
        <i className={activeNote.favorite ? 'starred' : ''} className="glyphicon glyphicon-star"></i>
        <i onClick={(id) => handleDelete(id)} className="glyphicon glyphicon-remove"></i>
      </div>
    )
  }
}
