import React from 'react'

const Editor = ({
  activeNote,
  editNote
}) => {

  const handleInput = (e) => {
    editNote(e.target.value)
  }

  return (
    <div id="note-editor">
      <textarea className="form-control"
        value={activeNote.text}
        onChange={handleInput}></textarea>
    </div>
  )
}

export default Editor
