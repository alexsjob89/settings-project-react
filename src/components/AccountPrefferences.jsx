import React,{useState} from 'react'

function AccountPrefferences() {
  const [email, setEmail] = useState("user@example.com")
  const [newEmail, setNewEmail] = useState("")
  const [showEmailInput, setShowEmailInput] = useState(false)

  const [password, setPassword] = useState("password123")
  const [newPassword, setNewPassword] = useState("")
  const [showPasswordInput, setShowPasswordInput] = useState(false)

  const handleChangeEmail = () => {
    setEmail(newEmail)
    setNewEmail("")
    setShowEmailInput(false)
  }

  const handleChangePassword = () => {
    setPassword(newPassword)
    setNewPassword("")
    setShowPasswordInput(false)
  }



  return (
    <div className='AccountPrefferences' style={{

      width: "35rem",
      height: "20rem",
      position: "relative",
      top:"0",
      paddingLeft: "20px",
      borderRadius:"20px",
      backgroundColor: "white"}}>
       <h2>ACCOUNT PREFFERENCES</h2>
    <div>
    <h2>Email Address</h2>
       <p>{email}</p>
       <button
       className='btn' onClick={() => setShowEmailInput(!showEmailInput)}>Change Email</button>
       {showEmailInput && (
        <div style={{

          width: "10rem",
          position: "absolute"}}>
        <input className='account-input'
        type="email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        placeholder='New Email' />
        <button className='btn' onClick={handleChangeEmail} disabled={!newEmail.trim()}>Save</button>
    </div>
       )}
</div>

<div>
       <h2>Password</h2>
       <p>*******</p>
       <button className='btn' onClick={() => setShowPasswordInput(!showPasswordInput)}>Change Password</button>
       {showPasswordInput && (
        <div style={{

          width: "min-content"}}>
        <input
        className='account-input'
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder='New password' />
        <button className='btn'  onClick={handleChangePassword} disabled={!newPassword.trim()}>Save</button>
    </div>
       )}
</div>


    </div>
  )
}

export default AccountPrefferences