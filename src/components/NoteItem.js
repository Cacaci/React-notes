import React, { Component, PropTypes } from 'react'

export default class NoteItem extends Component {
  constructor (props) {
    super(props)
    this.state = {filterNotes: this.props.notes || []}
    this.handleTest = this.handleTest.bind(this)
    this.handleItem = this.handleItem.bind(this)
  }
  handleTest (e, note) {
    const { handleActiveNote, handleEdit } = this.props
    e.preventDefault()
    handleActiveNote(note)
    handleEdit(note.text)
  }

  handleItem () {
    const { notes, show } = this.props
    let filterNotes = show === 'all' ? notes : notes.filter(note => note.favorite === true)
    return filterNotes
  }
 
  render () {
    const { notes, show, activeNote, handleFilter } = this.props
    return (
      <div className="list-group">
        {this.handleItem().map((note, index) => {
          return (
            <a onClick={e => this.handleTest(e, note)} key={index} className={activeNote.id === note.id ? 'list-group-item active' : 'list-group-item'} href="Javascript:void(0);">
              <h4 className="list-group-item-heading">{note.text}</h4>
            </a>
          )
        })}
      </div>
    )
  }
}
