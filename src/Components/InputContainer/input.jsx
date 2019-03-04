import React, { Component } from 'react'


class Input extends Component {
    // state = {
    //     message: ''
    // }

    // onSubmit = (e) => {
    //     e.preventDefault()
    //     this.props.inputBar(this.state.message)
    //     this.setState({ message: ''})
    // }

    // onChange = (e) => this.setState({ [e.target.name] : e.target.value })

    render() {
    return ( 
      <div className="inputBar" style={{ display: 'flex', marginLeft: '10px'}}> 
        <input 
            // type="text"
            // name="message" 
            // placeholder="Message..." 
            // value={this.state.message}
        />
      </div>
    )
  }
}

// const inputBarStyle = {
//     background: "#797A9E",
//     minHeight: "3em",
//     width: "100%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
// }

export default Input