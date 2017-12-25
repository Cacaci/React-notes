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
  handleAdd,
  handleDelete,
  handleActiveNote
}) => (
  <div id="note">
    <Toolbar
      notes={notes}
      activeNote={activeNote}
      handleAdd={handleAdd}
      handleDelete={handleDelete}
      toggleFavorite={toggleFavorite} />
    <NoteList notes={notes} activeNote={activeNote} handleActiveNote={handleActiveNote} />
    <Editor editNote={editNote} activeNote={activeNote} />
  </div>
)

const mapStateToProps = (state) => ({
  notes: state.notes,
  activeNote: state.activeNote
})

const mapDispatchToProps = (dispatch) => ({
  handleAdd: () => dispatch(addNote()),
  handleActiveNote: (note) => dispatch(setActiveNote(note)),
  handleDelete: id => dispatch(deleteNote(id)),
  editNote: text => editNote(text),
  toggleFavorite
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
