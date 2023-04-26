import React,{useState} from 'react';

function SafetyAndPrivacy() {
  const [settings, setSettings] = useState({
    twoFoctorAuth: false,
    makeProfilePrivacy: false,
    allowMarketingEmails: true,
   })

   const handleToggleSetting = (settingKey) => {
     setSettings({...settings, [settingKey]: !settings[settingKey]});
   }


  return (
    <div className='SafetyAndPrivacy'>
    <h1>Safety & Privacy</h1>

    <div>
      <h2>Settings</h2>
      <div>
        <label>
          <input type="checkbox"
          checked={settings.twoFoctorAuth}
          onChange={() => handleToggleSetting("twoFactorAuth")} />
          Enable Two-Factor Authentification
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox"
          checked={settings.makeProfilePrivacy}
          onChange={() => handleToggleSetting("makeProfilePrivacy")} />\
        Make Profile Private
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox"
          checked={settings.allowMarketingEmails}
          onChange={() => handleToggleSetting("allowMarketEmails")} />\
        Allow Marketing
        </label>
      </div>


    </div>
    </div>
  )
}

export default SafetyAndPrivacy