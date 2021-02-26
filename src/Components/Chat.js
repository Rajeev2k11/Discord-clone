import React,{useEffect, useState} from 'react'
import Chatheader from './Chatheader'

import './Chat.css'
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import OnlineView from './OnlineView';
import Message from './Message';
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "../features/appSlice";
import { selectUser } from "../features/userSlice";
import firebase from "firebase";
import db from "../Firebase";

function Chat() {
    const user = useSelector(selectUser); 
    const channelId = useSelector(selectChannelId);  
    const channelName = useSelector(selectChannelName);

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        if(channelId){
            db.collection("channels")
            .doc(channelId)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot)=>
            setMessages(snapshot.docs.map((doc)=>doc.data())))
        }
    },[channelId])


    const sendMessage = (e) => {
        e.preventDefault();
    
        db.collection("channels").doc(channelId).collection("messages").add({
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          message: input,
          user: user,
        });
    
        setInput("");
      };
    return (
        <div className="chat">
            <Chatheader channelName={channelName}/>
            <div className="grid">
            <div className="chatbox">
                <div className="chatMsg">
                    {messages.map(message=>(
                        <Message 
                    timestamp={message.timestamp}
                    message={message.message}
                    user={message.user}/>
                    ))}
                                        
                </div>  
                <div className='chatInput'>
                    <AddCircleIcon fontSize="large" />
                    <form>
                        <input disabled={!channelId} value={input} onChange={(e)=>{setInput(e.target.value)}}/>
                        <button onClick={sendMessage}>Send Message</button>
                    </form>
                    <div className="chatInputIcons">
                        <CardGiftcardIcon fontSize="large" />
                        <GifIcon fontSize="large" />
                        <EmojiEmotionsIcon fontSize="large" />
                    </div>
                </div>          
            </div>
            <div className="onLineView">
               <OnlineView/>
            </div>
            </div>
            
           
        </div>
    )
}

export default Chat
