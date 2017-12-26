// import React from 'react'

// const NoteList = ({
//   notes,
//   activeNote
// }) => {
//   return (
//     <div id="notes-list">
//       <div id="list-header">
//         <h2>Notes | coligo</h2>
//         <div className="btn-group btn-group-justified" role="group">
//           {/* All notes button */}
//           <div className="btn-group" role="group">
//             <button type="button" className="btn btn-default">All Notes</button>
//           </div>
//           {/* Favorites button */}
//           <div className="btn-group" role="group">
//             <button type="button" className="btn btn-default">Favorites</button>
//           </div>
//         </div>
//       </div>
//       {/* Render note list */}
//       <div className="container">
//         <div className="list-group">
//           {
//             notes.map((note, index) => {
//               return (
//                 <a key={note.id} className="list-group-item" className={activeNote.id === note.id ? 'active' : ''} href="Javascript:void(0);">
//                   <h4 className="list-group-item-heading">{note.text}</h4>
//                 </a>
//               )
//             })
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default NoteList

import React, { Component, PropTypes } from 'react'

export default class NoteList extends Component {
  constructor (props) {
    super(props)
    this.state = {filterNotes: this.props.notes || []}
    this.handleTest = this.handleTest.bind(this)
  }
  handleTest (e, note) {
    const { handleActiveNote, handleEdit } = this.props
    e.preventDefault()
    handleActiveNote(note)
    handleEdit(note.text)
  }
  goFilter (type) {
    this.props.handleFilter(type)
    let show = this.props.show
    let notes = this.props.notes
    let newNotes
    const filterNotes = () => {
      if (show === 'all') {
        return notes
      } else {
        return newNotes = notes.filter(item => item.favorite === true)
      }
    }
    this.setState({filterNotes: filterNotes()})
    console.log(filterNotes())
  }
  componentDidMount () {}

  render () {
    const { notes, show, activeNote, handleFilter } = this.props
    let filterNotes = show === 'all' ? notes : notes.filter(note => note.favorite === true)
    return (
      <div id="notes-list">
        <div id="list-header">
          <h2>Notes | coligo</h2>
          <div className="btn-group btn-group-justified" role="group">
            <div className="btn-group" role="group">
              <button onClick={() => this.goFilter('all')} type="button" className="btn btn-default">All Notes</button>
            </div>
            <div className="btn-group" role="group">
              <button onClick={() => handleFilter('favorite')} type="button" className="btn btn-default">Favorites</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="list-group">
            {filterNotes.map((note, index) => {
              return (
                <a onClick={e => this.handleTest(e, note)} key={index} className={activeNote.id === note.id ? 'list-group-item active' : 'list-group-item'} href="Javascript:void(0);">
                  <span className="list-group-item-heading">{note.text.substring(0, 30)}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
