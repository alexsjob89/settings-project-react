import React from 'react'
import {Link} from "react-router-dom"

function Wrapper() {
  return (
    <div className='wrapper' style={{
     borderBottom: "1px solid black",
     position: "relative",
     width: "60rem",
     margin: "auto",
     padding: "0"}}>
     <ul style={{display: "flex", alignItems: "center"}}>
      <li>
       <Link to="/">Profile</Link>
      </li>
      <li>
       <Link to="/account" className='account-class'>Account</Link>
      </li>
      <li>
       <Link to="/safetyAndprivacy">Safety&Privacy</Link>
      </li>
      <li>
       <Link to="/feedsettings">Feed Settings</Link>
      </li>
      <li>
       <Link to="/notifications">Notifications</Link>
      </li>
     </ul>
    </div>
  )
}

export default Wrapper