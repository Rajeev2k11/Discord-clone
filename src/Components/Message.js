import React from 'react'
import { Avatar } from "@material-ui/core";
import './Message.css'


function Message({timestamp, user, message}) {
  
    return (
        <div className="message">
        <Avatar src={user.photo} className="avatar"/>
            <div className="messageInfo">
                <h4>{user.displayName}
                    <sapn className="timestamp">{new Date(timestamp?.toDate()).toUTCString()}</sapn>
                </h4>
                <p>{message}</p>
            </div>
            
        </div>
    )
}

export default Message
