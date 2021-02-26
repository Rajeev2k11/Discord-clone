import React, {useState, useEffect} from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from "@material-ui/icons/Add";
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import { Avatar } from "@material-ui/core";
import { selectUser} from '../features/userSlice';
import { useSelector} from "react-redux";
import db, {auth} from "../Firebase";

import './Sidebar.css'
import Channel from './Channel';
function Sidebar() {

    const user = useSelector( selectUser )
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection("channels").onSnapshot((snapshot) =>
          setChannels(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              channel: doc.data(),
            }))
          )
        );
      }, []);
      const handleAddChannel = () => {
        const channelName = prompt("Enter a new channel name");
    
        if (channelName) {
          db.collection("channels").add({
            channelName: channelName,
          });
        }
      };

    return (
        <div className='sidebar'>
            <div className='topbar'>
                <h3>Reactjsofficial</h3>
                <ExpandMoreIcon/>
            </div>
            <div className='Channels'>
                <div className="channels_sidebar">
                    <div className="channel_header">
                        <ExpandMoreIcon/>
                        <h4>TEXT CHANNELS</h4>   
                    </div>
                    <AddIcon onClick={handleAddChannel} className="addbutton"/>
                </div> 
                <div className='channel_list'>
                {channels.map(({ id, channel }) => (
            <Channel
              key={id}
              id={id}
              channelName={channel.channelName} 
            />
          ))}
                </div> 
            </div>
            <div className='profile'>
                <div className='profileInfo'>
                    <Avatar onClick={()=>auth.signOut()} src={user.photo} className="Avatar"/>
                    <div>
                        <h3>{user.displayName}</h3>
                        <p>#{user.uid.substring(0,5)}</p>
                    </div>
                   
                </div>
                <div className='profileIcons'>
                    <MicIcon className="miceIcon"/>
                    <HeadsetIcon className="headsetIcon"/>
                    <SettingsIcon className="settingsIcon"/>
                </div>
            </div>
           
        </div>
    )
}

export default Sidebar
