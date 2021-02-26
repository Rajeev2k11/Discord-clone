import React from 'react'
import { Avatar } from "@material-ui/core";
import './OnlineView.css'

function OnlineView() {
    return (
        <div className="OnlineList">
           <span>ONLINE-1</span>
           <div className="Useronline">
           <Avatar/>
           <h3>User</h3>
           </div>
           
        </div>
    )
}

export default OnlineView
