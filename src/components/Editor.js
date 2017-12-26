// import React from 'react'

// const Editor = ({
//   activeNote,
//   editNote
// }) => {

//   const handleInput = (e) => {
//     editNote(e.target.value)
//   }

//   return (
//     <div id="note-editor">
//       <textarea className="form-control"
//         value={activeNote.text}
//         onChange={handleInput}></textarea>
//     </div>
//   )
// }

// export default Editor

import React, { Component } from 'react'

export default class Toolbar extends Component {
  constructor (props) {
    super(props)
    // this.state = {value: this.props.activeNote.text}
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput (e) {
    const { activeNote, handleEdit } = this.props
    let text = e.target.value
    // this.setState({value: text})
    // this.setState({activeNote.text: text})
    handleEdit(text)
  }
  componentDidMount () {
  }

  render () {
    const { activeNote } = this.props
    return (
      <div id="note-editor">
        <textarea className="form-control"
          // value={this.state.value}
          value={activeNote.text}
          onChange={this.handleInput}></textarea>
      </div>
    )
  }
}