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
            key:104,
        },
        {
            avatarUrl:"https://farm5.staticflickr.com/4447/37761450081_abd8bce5f8_k.jpg",
            authorName:"Cat",
            date:"2019 Mar 04 11:34:24",
            message:"Miaow miaow miaow",
            key:104,
        },
        {
            avatarUrl:"https://farm2.staticflickr.com/1142/1139134023_c497d6b907_z.jpg",
            authorName:"Dog",
            date:"2019 Mar 04 11:34:58",
            message:"Woof.",
            key:104,
        },
        {
            avatarUrl:"https://farm5.staticflickr.com/4447/37761450081_abd8bce5f8_k.jpg",
            authorName:"Cat",
            date:"2019 Mar 04 11:38:20",
            message:"Miaow miaow",
            key:104,
        },
        {
            avatarUrl:"https://farm1.staticflickr.com/929/43986331111_f71f9200c3_k.jpg",
            authorName:"Rabbit",
            date:"2019 Mar 04 11:39:13",
            message:"*More rabbit noises*",
            key:104,
        },
        {
            avatarUrl:"https://farm1.staticflickr.com/929/43986331111_f71f9200c3_k.jpg",
            authorName:"Rabbit",
            date:"2019 Mar 04 11:42:24",
            message:"*Even more rabbit noises*",
            key:104,
        },
        {
            avatarUrl:"https://farm5.staticflickr.com/4447/37761450081_abd8bce5f8_k.jpg",
            authorName:"Cat",
            date:"2019 Mar 04 11:42:08",
            message:"Miaow miaow",
            key:104,
        },
        {
            avatarUrl:"https://farm5.staticflickr.com/4447/37761450081_abd8bce5f8_k.jpg",
            authorName:"Cat",
            date:"2019 Mar 05 08:23:48",
            message:"Miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow miaow",
            key:104,
        }
      ]
    };
    render() {
    let msgs = this.state.messages;
        return (
        <div className="chat-container">
            <ChatRow avatarUrl={msgs[0].avatarUrl} authorName={msgs[0].authorName} date={msgs[0].date} message={msgs[0].message}/>
            <ChatRow avatarUrl={msgs[1].avatarUrl} authorName={msgs[1].authorName} date={msgs[1].date} message={msgs[1].message}/>
            <ChatRow avatarUrl={msgs[2].avatarUrl} authorName={msgs[2].authorName} date={msgs[2].date} message={msgs[2].message}/>
            <ChatRow avatarUrl={msgs[3].avatarUrl} authorName={msgs[3].authorName} date={msgs[3].date} message={msgs[3].message}/>
            <ChatRow avatarUrl={msgs[4].avatarUrl} authorName={msgs[4].authorName} date={msgs[4].date} message={msgs[4].message}/>
            <ChatRow avatarUrl={msgs[5].avatarUrl} authorName={msgs[5].authorName} date={msgs[5].date} message={msgs[5].message}/>
            <ChatRow avatarUrl={msgs[6].avatarUrl} authorName={msgs[6].authorName} date={msgs[6].date} message={msgs[6].message}/>
            <ChatRow avatarUrl={msgs[7].avatarUrl} authorName={msgs[7].authorName} date={msgs[7].date} message={msgs[7].message}/>
            <ChatRow avatarUrl={msgs[8].avatarUrl} authorName={msgs[8].authorName} date={msgs[8].date} message={msgs[8].message}/>
            <ChatRow avatarUrl={msgs[9].avatarUrl} authorName={msgs[9].authorName} date={msgs[9].date} message={msgs[9].message}/>
            <ChatRow avatarUrl={msgs[10].avatarUrl} authorName={msgs[10].authorName} date={msgs[10].date} message={msgs[10].message}/>
            <ChatRow avatarUrl={msgs[11].avatarUrl} authorName={msgs[11].authorName} date={msgs[11].date} message={msgs[11].message}/>
        </div>
        );
    }
}

export default ChatContainer;