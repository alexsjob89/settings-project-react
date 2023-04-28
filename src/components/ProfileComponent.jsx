import React from 'react'

function ProfileComponent({
 firstName,
 lastName,
 email,
 password,
 confirmPassword,
 warnings,
 handleSubmit,
 setFirstName,
 setLastName,
 setEmail,
 setPassword,
 setConfirmPassword,
 setWarnings,
}) {
  return (
    <div style={{
      textAlign: "left",
      marginTop: "1rem",
      lineHeight: "1rem",
      justifyContent: "space-around",
      marginLeft: "1rem",

      }} className='ProfileComponent'>

          <form onSubmit={handleSubmit} style={{
          display: "grid",

          width: "22.7rem",
          marginTop: "1rem",
          height: "20rem"}}>

<label>First Name:
<input className='profile-input' type="text"
name='firstName'
value={firstName}
onChange={(e) => setFirstName(e.target.value)}
required
/>
</label>


<label>Last Name:
<input className='profile-input' type="text"
name='lastName'
value={lastName}
onChange={(e) => setLastName(e.target.value)}
required
/>
</label>


<label>Email:
<input className='profile-input' type="email"
name='email'
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
</label>


<label>Password:
<input className='profile-input' type="password"
name='password'
value={password}
onChange={(e) => setPassword(e.target.value)}
required
/>
</label>


<label>
Confirm Password:
<input className='profile-input'
type="password"
value={confirmPassword}
onChange={(e) => setConfirmPassword(e.target.value)}
required
/>

</label>
<button type='"submit' style={{
  border: "none",
  background: "#263562",
  color: "white",
  borderRadius: "40px"}}>Save changes</button>
</form>
{warnings.length > 0 && (
<ul>
{warnings.map((warning, index) => (
<li key={index} style={{
  color: "red",
  border: "0.5px solid red",
  width: "max-content",
  fontSize: "15px",
  padding: "4px",
  borderRadius: "8px",
  backgroundColor: "rgba(245, 39, 39, 0.20)",
  boxShadow: "0px 9px 20px -10px #940000",
  marginRight: "2rem"}}>
 {warning}
</li>
))}
</ul>
)}
    </div>
  )
}

export default ProfileComponent