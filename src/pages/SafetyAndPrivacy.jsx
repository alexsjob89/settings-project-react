
import React,{useState} from 'react';


function SafetyAndPrivacy() {
  const [settings, setSettings] = useState({
    twoFoctorAuth: true,
    makeProfilePrivacy: true,
    allowMarketingEmails: true,
   })

   const handleToggleSetting = (settingKey) => {
     setSettings({...settings, [settingKey]: !settings[settingKey]});
   }


  return (
    <div className='SafetyAndPrivacy-class' style={{
      positions:"relative",
      margin: "auto",
      marginTop:"3rem",
      display: "block",

      width: "20rem",
      height: "16rem",
      borderRadius: "20px",
      backgroundColor: "white",
      padding: "20px"
    }}>
    <h1 style={{
      marginTop: "-0.5rem"
    }}>Safety & Privacy</h1>
      <h2 style={{
      marginTop: "-0.5rem",
      marginBottom: "10px"
    }}>Settings</h2>
    <div style={{
      fontSize: "20px",
      lineHeight: "45px",
      margin: "auto",
      inset: "0 0 0 0",


    }}>
      <div>
        <label >
          <input type="checkbox" style={{backgroundColor: "red"}}
          checked={settings.twoFoctorAuth}
          onChange={() => handleToggleSetting("twoFactorAuth")} />
          Enable Two-Factor Authentification
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox"
          checked={settings.makeProfilePrivacy}
          onChange={() => handleToggleSetting("makeProfilePrivacy")} />
        Make Profile Private
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox"
          checked={settings.allowMarketingEmails}
          onChange={() => handleToggleSetting("allowMarketEmails")} />
        Allow Marketing
        </label>
      </div>


    </div>
    </div>
  )
}

export default SafetyAndPrivacy