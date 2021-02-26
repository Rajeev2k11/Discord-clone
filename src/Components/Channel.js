import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { setChannelInfo } from "../features/appSlice";
import './Channel.css'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SettingsIcon from '@material-ui/icons/Settings';

function Channel({id, channelName}) {

    const[Hover,setHover] = useState(false)
    const dispatch = useDispatch();


    return (
        <div  onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)} 
              className='channelSidebar'
              onClick={() =>
                dispatch(
                 setChannelInfo({
                    channelId: id,
                    channelName: channelName,
          })
        )
      }
        >
           <h4>
               <span className='hash'>#</span>
               {channelName}
              
           </h4>
           {Hover && (
            <div>
            <PersonAddIcon className='personIcon'/>
            <SettingsIcon className='settingIcon'/>
            </div>  
        )}
            
        </div>
        
    )
}

export default Channel
