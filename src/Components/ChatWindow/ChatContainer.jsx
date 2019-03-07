import React from 'react';
import ChatRow from "./ChatRow.jsx";
import './ChatContainer.css';

let ChatContainer = (props) => {
        let msgs = props.msgs;
        let users = props.users;
        let chatrows = msgs.map((i)=><ChatRow avatarUrl={users[i.author-201].avatarUrl} authorName={users[i.author-201].name} date={i.date} message={i.message} currentUserName={props.currentUserName} key={i.key}/>);
        return (
        <div className="chat-container">
            {chatrows}
        </div>
        );
}

export default ChatContainer;