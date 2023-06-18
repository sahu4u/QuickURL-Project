import React, {useContext} from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
import {AuthContext} from "../../context/AuthContext"

export default function Header() {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    const {user}=useContext(AuthContext)
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to="/" style={{"textDecoration":"none"}}>
            <span className='topbarLogo'>QuickURL</span>
        </Link>
      </div>
      
      <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">About</span>
            <span className="topbarLink">Explore</span>
          </div>

          
          <div className='topbarProfile'>
                <img src={PF+"ok.png"} alt="" className="topbarImg" />
                <span className='username'>{user.username}</span>
          </div>
          
          

          
      </div>

    </div>
  
  )
}
