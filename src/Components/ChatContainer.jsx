import React from 'react';
import ChatRow from "./ChatRow.jsx";
import './ChatContainer.css';

class ChatContainer extends React.Component {
    state = {
      messages: [
        {
            avatarUrl: "https://farm2.staticflickr.com/1142/1139134023_c497d6b907_z.jpg",
            authorName:"Dog",
            date:"2019 Mar 01 19:40:20",
            message:"Woof!",
            key:101,
        },
        {
            avatarUrl:"https://farm5.staticflickr.com/4447/37761450081_abd8bce5f8_k.jpg",
            authorName:"Cat",
            date:"2019 Mar 01 19:45:23",
            message:"Miaow, miaow, miaow!",
            key:102,
        },
        {
            avatarUrl:"https://farm1.staticflickr.com/929/43986331111_f71f9200c3_k.jpg",
            authorName:"Rabbit",
            date:"2019 Mar 04 11:20:38",
            message:"*Appropriate rabbit noises*",
            key:103,
        },
        {
            avatarUrl:"https://farm5.staticflickr.com/4447/37761450081_abd8bce5f8_k.jpg",
            authorName:"Cat",
            date:"2019 Mar 04 11:34:08",
            message:"Miaow miaow",
            key:104,
        },
        {
            avatarUrl:"https://farm5.staticflickr.com/4447/37761450081_abd8bce5f8_k.jpg",
            authorName:"Cat",
            date:"2019 Mar 04 11:34:15",
            message:"Miaow miaow",
            key:105,
        },
        {
            avatarUrl:"https://farm5.staticflickr.com/4447/37761450081_abd8bce5f8_k.jpg",
            authorName:"Cat",
            date:"2019 Mar 04 11:34:24",
            message:"Miaow miaow miaow",
            key:106,
        },
        {
            avatarUrl:"https://farm2.staticflickr.com/1142/1139134023_c497d6b907_z.jpg",
            authorName:"Dog",
            date:"2019 Mar 04 11:34:58",
            message:"Woof.",
            key:107,
        },
        {
            avatarUrl:"https://farm2.staticflickr.com/1142/1139134023_c497d6b907_z.jpg",
            authorName:"Dog",
            date:"2019 Mar 04 11:36:27",
            message:"Woof woof. Woof woof. Woof woof woof woof, woof woof woof woof woof woof: woof woof woof woof woof woof woof. Woof woof woof woof woof woof woof woof woof woof (woof woof woof woof woof woof woof woof woof woof woof woof woof woof) woof woof woof woof woof; woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof! Woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof woof.",
            key:108,
        },
        {
            avatarUrl:"https://farm5.staticflickr.com/4447/37761450081_abd8bce5f8_k.jpg",
            authorName:"Cat",
            date:"2019 Mar 04 11:38:20",
            message:"Miaow miaow?",
            key:109,
        },
        {
            avatarUrl:"https://farm1.staticflickr.com/929/43986331111_f71f9200c3_k.jpg",
            authorName:"Rabbit",
            date:"2019 Mar 04 11:39:13",
            message:"*More rabbit noises*",
            key:110,
        },
        {
            avatarUrl:"https://farm1.staticflickr.com/929/43986331111_f71f9200c3_k.jpg",
            authorName:"Rabbit",
            date:"2019 Mar 04 11:42:24",
            message:"*Even more rabbit noises*",
            key:111,
        },
        {
            avatarUrl:"https://farm5.staticflickr.com/4447/37761450081_abd8bce5f8_k.jpg",
            authorName:"Cat",
            date:"2019 Mar 04 11:42:08",
            message:"Miaow miaow...",
            key:112,
        },
        {
            avatarUrl:"https://farm5.staticflickr.com/4447/37761450081_abd8bce5f8_k.jpg",
            authorName:"Cat",
            date:"2019 Mar 05 08:23:48",
            message:"Miaow miaow miaow miaow, miaow miaow miaow miaow miaow. Miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow, miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow; miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow.",
            key:113,
        }
      ]
    };
    render() {
        let msgs = this.state.messages;
        let chatrows = msgs.map((i)=><ChatRow avatarUrl={i.avatarUrl} authorName={i.authorName} date={i.date} message={i.message}/>);
        return (
        <div className="chat-container">
            {chatrows}
        </div>
        );
    }
}

export default ChatContainer;