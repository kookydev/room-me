import React, { Component } from 'react'

class SubmitButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.state.message}></button>
      </div>
    )
  }
}

export default SubmitButton
