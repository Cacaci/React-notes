import React from 'react'
import { connect } from 'react-redux'

import Editor from '../components/Editor'
import NoteList from '../components/NoteList'
import Toolbar from '../components/Toolbar'

import { addNote, editNote, deleteNote, setActiveNote, toggleFavorite } from '../actions'

const App = ({
  dispatch,
  notes,
  activeNote,
  handleAdd
}) => (
  <div id="note">
    <Toolbar
      activeNote={activeNote}
      handleAdd={handleAdd}
      deleteNote={deleteNote}
      toggleFavorite={toggleFavorite} />
    <NoteList notes={notes} activeNote={activeNote} />
    <Editor editNote={editNote} />
  </div>
)

const mapStateToProps = (state) => ({
  notes: state.notes,
  activeNote: state.activeNote
})

const mapDispatchToProps = (dispatch) => ({
  handleAdd: () => addNote(),
  deleteNote: id => deleteNote(id),
  editNote: text => editNote(text),
  toggleFavorite
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
