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
  }
  componentDidMount () {
  }
  render () {
    const { notes, activeNote } = this.props
    return (
      <div id="notes-list">
        <div id="list-header">
          <h2>Notes | coligo</h2>
          <div className="btn-group btn-group-justified" role="group">
            {/* All notes button */}
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-default">All Notes</button>
            </div>
            {/* Favorites button */}
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-default">Favorites</button>
            </div>
          </div>
        </div>
        {/* Render note list */}
        <div className="container">
          <div className="list-group">
            {notes.map((note, index) => {
              return (
                <a key={note.id} className={activeNote.id === note.id ? 'active' : ''} className="list-group-item" href="Javascript:void(0);">
                  <h4 className="list-group-item-heading">{note.text}</h4>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
