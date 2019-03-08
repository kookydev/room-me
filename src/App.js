import React, { Component } from "react";
import "./App.css";
import HeaderBar from "./Components/HeaderBar.jsx";
import InputBar from "./Components/InputContainer/InputBar";
import ChatContainer from "./Components/ChatContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentRoom: 102,
      currentUser: 201,
      inputValue: "",
      rooms: [{
          key: 101,
          name: "Living-room",
          users: [201, 202, 203]
        },
        {
          key: 102,
          name: "Kitchen",
          users: [204, 202]
        },
        {
          key: 103,
          name: "Conservatory",
          users: []
        }
      ],
      users: [{
          key: 201,
          name: "Dog",
          avatarUrl: "https://farm2.staticflickr.com/1142/1139134023_c497d6b907_z.jpg"
        },
        {
          key: 202,
          name: "Cat",
          avatarUrl: "https://farm5.staticflickr.com/4447/37761450081_abd8bce5f8_k.jpg"
        },
        {
          key: 203,
          name: "Rabbit",
          avatarUrl: "https://farm1.staticflickr.com/929/43986331111_f71f9200c3_k.jpg"
        },
        {
          key: 204,
          name: "Parrot",
          avatarUrl: "https://farm1.staticflickr.com/621/22243094746_b96fd558a8_b.jpg"
        },
        {
          key: 205,
          name: "Snake",
          avatarUrl: "https://farm5.staticflickr.com/4831/31237635227_ae50d4a8d0_b.jpg"
        }
      ],
      messages: [{
          date: "2019 Mar 01, 7:40pm",
          message: "Woof!",
          room: 101,
          author: 201,
          key: 301,
        },
        {
          date: "2019 Mar 01, 7:45pm",
          message: "Miaow, miaow, miaow!",
          room: 101,
          author: 202,
          key: 302,
        },
        {
          date: "2019 Mar 04, 11:20am",
          message: "*Appropriate rabbit noises*",
          room: 101,
          author: 203,
          key: 303,
        },
        {
          date: "2019 Mar 04, 11:33am",
          message: "Miaow miaow",
          room: 101,
          author: 202,
          key: 304,
        },
        {
          date: "2019 Mar 04, 11:34am",
          message: "Miaow miaow",
          room: 101,
          author: 202,
          key: 305,
        },
        {
          date: "2019 Mar 04, 11:34am",
          message: "Miaow miaow miaow",
          room: 101,
          author: 202,
          key: 306,
        },
        {
          date: "2019 Mar 04, 11:35am",
          message: "Woof.",
          room: 101,
          author: 201,
          key: 307,
        },
        {
          date: "2019 Mar 04, 11:36am",
          message: "Woof woof. Woof woof. Woof woof woof woof, woof woof woof woof woof woof: woof woof woof woof woof woof woof. Woof woof woof woof woof woof woof woof woof woof (woof woof woof woof woof woof woof woof woof woof woof woof woof woof) woof woof woof woof woof; woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof! Woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof.",
          room: 101,
          author: 201,
          key: 308,
        },
        {
          date: "2019 Mar 04, 11:38am",
          message: "Miaow miaow?",
          room: 101,
          author: 202,
          key: 309,
        },
        {
          date: "2019 Mar 04, 11:39am",
          message: "*More rabbit noises*",
          room: 101,
          author: 203,
          key: 310,
        },
        {
          date: "2019 Mar 04, 11:42am",
          message: "*Even more rabbit noises*",
          room: 101,
          author: 203,
          key: 311,
        },
        {
          date: "2019 Mar 04, 11:42am",
          message: "Miaow miaow...",
          room: 101,
          author: 202,
          key: 312,
        },
        {
          date: "2019 Mar 05, 8:23am",
          message: "Miaow miaow miaow miaow, miaow miaow miaow miaow miaow. Miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow, miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow; miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow.",
          room: 101,
          author: 202,
          key: 313,
        },
        {
          date: "2019 Mar 06, 11:42am",
          message: "Squawk squawk squawk!",
          room: 102,
          author: 204,
          key: 314,
        },
        {
          date: "2019 Mar 06, 11:44am",
          message: "Squawk squawk squawk squawk squawk squawk squawk.",
          room: 102,
          author: 204,
          key: 315,
        },
        {
          date: "2019 Mar 06, 11:49am",
          message: "Miaow?",
          room: 102,
          author: 202,
          key: 316,
        }, {
          date: "2019 Mar 06, 11:51am",
          message: "Squawk squawk squawk squawk!",
          room: 102,
          author: 204,
          key: 317,
        },
        {
          date: "2019 Mar 06, 12:02pm",
          message: "Miaow miaow miaow miaow miaow miaow miaow miaow! Miaow. Miaow miaow miaow miaow miaow miaow miaow; miaow miaow miaow miaow miaow miaow miaow miaow &mdash; miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow. Miaow miaow.",
          room: 101,
          author: 202,
          key: 318,
        }
      ]
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }
  inputHandler(event) {
    this.setState({inputValue:event.target.value})
  };
  sendMessage(input) {
    let date = new Date();
    let currentRoom = this.state.currentRoom;
    let time;
    let minutes;
    if (date.getMinutes()<10) {
      minutes = `0${date.getMinutes()}`;
    }
    else {
      minutes = `${date.getMinutes()}`;
  }
    if (date.getHours()===0) {
      time = "OO:"+minutes+"am"
    }
    else if (date.getHours()===12) {
      time = "12:"+minutes+"pm"
    }
    else if (date.getHours()>12) {
      time = `${date.getHours()-12}:${minutes}pm`
    }
    else {
      time = `${date.getHours()}:${minutes}am`
    };
    let newMessage = {
      "date": `${date.getFullYear()} ${date.toLocaleString("en-us",{month:"short"})} ${date.getDate()<10 ? "0" : ""}${date.getDate()}, ${time}`,
      "message": this.state.inputValue,
      "room": currentRoom,
      "author": this.state.currentUser,
      "key": this.state.messages.length+301
    }
    let newMessageArray = [...this.state.messages,newMessage];
    this.setState({messages: newMessageArray})
    this.setState({inputValue:""})
  };
  messageInput = document.getElementsByClassName("message-bar")[0];
  render() {
    return ( 
      <div className = "App">
      <HeaderBar roomName = {
        this.state.rooms[this.state.currentRoom - 101].name
      }
      userName = {
        this.state.users[this.state.currentUser - 201].name
      }
      avatarUrl = {
        this.state.users[this.state.currentUser - 201].avatarUrl
      }
      />
      <ChatContainer msgs = {
        this.state.messages.filter(msg => msg.room === this.state.currentRoom)
      }
      users = {
        this.state.users
      }
      currentUserName = {
        this.state.users[this.state.currentUser - 201].name
      }
      /> 
      <InputBar inputHandler={this.inputHandler} inputValue={this.state.inputValue} sendMessage={this.sendMessage}/>
      </div>
    );
  }
}

export default App;
