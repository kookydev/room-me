import React, { Component } from "react";
import "./App.css";
import HeaderBar from "./Components/HeaderBar.jsx";
import InputBar from "./Components/InputContainer/InputBar";
import ChatContainer from "./Components/ChatContainer";

// const data = [];

class App extends Component {
  state = {
    currentRoomName: "Living-room",
    currentUserName: "Cat",
    rooms: [
      {
        key:101,
        name:"Living-room",
        users:[201,202,203]
      },
      {
        key:102,
        name:"Kitchen",
        users:[201,202,204]
      },
      {
        key:203,
        name:"Conservatory",
        users:[]
      }
    ],
    users: [
      {
        key:201,
        name:"Dog",
        avatarUrl: "https://farm2.staticflickr.com/1142/1139134023_c497d6b907_z.jpg"
      },
      {
        key:202,
        name:"Cat",
        avatarUrl: "https://farm5.staticflickr.com/4447/37761450081_abd8bce5f8_k.jpg"
      },
      {
        key:203,
        name:"Rabbit",
        avatarUrl: "https://farm1.staticflickr.com/929/43986331111_f71f9200c3_k.jpg"
      },
      {
        key:204,
        name:"Parrot",
        avatarUrl: "https://farm1.staticflickr.com/621/22243094746_b96fd558a8_b.jpg"
      },
      {
        key:205,
        name:"Snake",
        avatarUrl: "https://farm5.staticflickr.com/4831/31237635227_ae50d4a8d0_b.jpg"
      }
    ],
    messages: [
      {
          date:"2019 Mar 01, 7:40pm",
          message:"Woof!",
          author:201,
          key:301,
      },
      {
          date:"2019 Mar 01, 7:45pm",
          message:"Miaow, miaow, miaow!",
          author:202,
          key:302,
      },
      {
          date:"2019 Mar 04, 11:20am",
          message:"*Appropriate rabbit noises*",
          author:203,
          key:303,
      },
      {
          date:"2019 Mar 04, 11:33am",
          message:"Miaow miaow",
          author:202,
          key:304,
      },
      {
          date:"2019 Mar 04, 11:34am",
          message:"Miaow miaow",
          author:202,
          key:305,
      },
      {
          date:"2019 Mar 04, 11:34am",
          message:"Miaow miaow miaow",
          author:202,
          key:306,
      },
      {
          date:"2019 Mar 04, 11:35am",
          message:"Woof.",
          author:201,
          key:307,
      },
      {
          date:"2019 Mar 04, 11:36am",
          message:"Woof woof. Woof woof. Woof woof woof woof, woof woof woof woof woof woof: woof woof woof woof woof woof woof. Woof woof woof woof woof woof woof woof woof woof (woof woof woof woof woof woof woof woof woof woof woof woof woof woof) woof woof woof woof woof; woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof! Woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof.",
          author:201,
          key:308,
      },
      {
          date:"2019 Mar 04, 11:38am",
          message:"Miaow miaow?",
          author:202,
          key:309,
      },
      {
          date:"2019 Mar 04, 11:39am",
          message:"*More rabbit noises*",
          author:203,
          key:310,
      },
      {
          date:"2019 Mar 04, 11:42am",
          message:"*Even more rabbit noises*",
          author:203,
          key:311,
      },
      {
          date:"2019 Mar 04, 11:42am",
          message:"Miaow miaow...",
          author:202,
          key:312,
      },
      {
          date:"2019 Mar 05, 8:23am",
          message:"Miaow miaow miaow miaow, miaow miaow miaow miaow miaow. Miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow, miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow; miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow.",
          author:202,
          key:313,
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <HeaderBar roomName={this.state.currentRoomName}/>
        <ChatContainer msgs={this.state.messages} users={this.state.users} currentUserName={this.state.currentUserName}/>
        <InputBar />
      </div>
    );
  }
}

export default App;
