import React,{useState} from 'react';
import ProfileComponent from '../components/ProfileComponent';

function Profile() {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [warnings, setWarnings] = useState([]);




const ProfileSettings = () => {

}



const handleSubmit = (e) => {
 e.preventDefault()
 const newWarnings = [];

 if (!firstName.trim()) {
   newWarnings.push("Name is required.")
 }

 if (!lastName.trim()) {
  newWarnings.push("Name is required.")
}

 if (!email.trim()) {
  newWarnings.push("Email is required.")
 }
 if (!password.trim()) {
  newWarnings.push("Password is required.")
 }

 if (password !== confirmPassword) {
  newWarnings.push("Password and confirm password do not match!");
}

 setWarnings(newWarnings);
}

  return (
    <div className='profile'>
<ProfileComponent
 firstName={firstName}
lastName={lastName}
email={email}
password={password}
confirmPassword={confirmPassword}
warnings={warnings}
handleSubmit={handleSubmit}
setFirstName={setFirstName}
setLastName={setLastName}
setEmail={setEmail}
setPassword={setPassword}
setConfirmPassword={setConfirmPassword}
setWarnings={setWarnings}

/>
    </div>
  )
}

export default Profile