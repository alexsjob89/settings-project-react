import {AnimatePresence} from 'framer-motion'
import React from 'react'
import {Link} from "react-router-dom"

function Wrapper() {
  return (
    <div className='wrapper' style={{
     borderBottom: "0.5px solid black",
    //  border: "1px solid black",
     position: "relative",
     width: "60rem",
     padding: " 2rem 0",
     marginTop: "2rem",
     margin: "auto",
     borderRadius: "20px",
     backgroundColor: "white",

     }}>
      <AnimatePresence mode="wait">
     <ul style={{
      display: "flex",
      alignItems: "center",
      }}>
      <li>
       <Link to="/" className='profile-class page'>Profile</Link>
      </li>
      <li>
       <Link to="/account" className='account-class page'>Account</Link>
      </li>
      <li>
       <Link to="/safetyAndprivacy" className='safetyAndprivacy-class page' >Safety&Privacy </Link>
      </li>
      <li>
       <Link to="/feedsettings" className='feed-class page'>Feed Settings</Link>
      </li>
      <li>
       <Link to="/notifications" className='notifications-class page'>Notifications</Link>
      </li>
     </ul>

      </AnimatePresence>
    </div>
  )
}

export default Wrapper