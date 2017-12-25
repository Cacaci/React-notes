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
  handleDelete
}) => (
  <div id="note">
    <Toolbar
      activeNote={activeNote}
      handleAdd={handleAdd}
      handleDelete={handleDelete}
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
  // handleAdd: () => addNote(),
  handleAdd: () => dispatch(addNote()),
  // handleDelete: id => deleteNote(id),
  handleDelete: id => dispatch(deleteNote(id)),
  editNote: text => editNote(text),
  toggleFavorite
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
