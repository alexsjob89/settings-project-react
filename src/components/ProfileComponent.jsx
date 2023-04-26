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
    <div>
          <form onSubmit={handleSubmit}>

<label>First Name:
<input type="text"
name='firstName'
value={firstName}
onChange={(e) => setFirstName(e.target.value)}
required
/>
</label>


<label>Last Name:
<input type="text"
name='lastName'
value={lastName}
onChange={(e) => setLastName(e.target.value)}
required
/>
</label>


<label>Email:
<input type="email"
name='email'
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
</label>


<label>Password:
<input type="password"
name='password'
value={password}
onChange={(e) => setPassword(e.target.value)}
required
/>
</label>


<label>
Confirm Password:
<input
type="password"
value={confirmPassword}
onChange={(e) => setConfirmPassword(e.target.value)}
required
/>
</label>
<button type='"submit'>Save changes</button>
</form>
{warnings.length > 0 && (
<ul>
{warnings.map((warning, index) => (
<li key={index} style={{
  color: "red",
  border: "0.5px solid red",
  width: "max-content",
  padding: "4px",
  borderRadius: "8px",
  backgroundColor: "rgba(245, 39, 39, 0.20)",
  boxShadow: "0px 9px 20px -10px #940000"}}>
 {warning}
</li>
))}
</ul>
)}
    </div>
  )
}

export default ProfileComponent