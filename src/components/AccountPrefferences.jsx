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
    <div className='AccountPrefferences'>
       <h2>ACCOUNT PREFFERENCES</h2>
    <div>
    <h2>Email Address</h2>
       <p>{email}</p>
       <button onClick={() => setShowEmailInput(!showEmailInput)}>Change Email</button>
       {showEmailInput && (
        <div>
        <input
        type="email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        placeholder='New Email' />
        <button onClick={handleChangeEmail} disabled={!newEmail.trim()}>Save</button>
    </div>
       )}
</div>

<div>
       <h2>Password</h2>
       <p>*******</p>
       <button onClick={() => setShowPasswordInput(!showPasswordInput)}>Change Password</button>
       {showPasswordInput && (
        <div>
        <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder='New password' />
        <button onClick={handleChangePassword} disabled={!newPassword.trim()}>Save</button>
    </div>
       )}
</div>


    </div>
  )
}

export default AccountPrefferences