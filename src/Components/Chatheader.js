import React from 'react'
import './Chatheader.css'
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
// import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import InboxIcon from '@material-ui/icons/Inbox';

function Chatheader({channelName}) {
    return (
        
        <div className='chatHeader'>
            <div className='leftheader'>
                <span className='chatheaderhash'>#</span>
                <h3>{channelName}</h3>
            </div>
            <div className='rightheader'>
                <NotificationsIcon/>
                <EditLocationRoundedIcon/>
                <PeopleAltRoundedIcon/>
                <div className="chatHeadersearch">
                    <input placeholder="Search" />
                    <SearchRoundedIcon />
                </div>
                <InboxIcon/>
                <HelpRoundedIcon/>
            </div>
        </div>
       
  
        
    )
}

export default Chatheader
