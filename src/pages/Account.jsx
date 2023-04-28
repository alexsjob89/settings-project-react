import React from 'react';
import AccountPrefferences from '../components/AccountPrefferences';
import LanguageSettings from '../components/LanguageSettings';




function Account() {

  return (
    <div className='Account' style={{
      margin: "0 1rem 0 15rem ",
      height: "30rem",
      display: "flex",
      flexWrap: "wrap",
      marginTop: "3rem",
      maxWidth:"max-content"}}>

<LanguageSettings/>
<AccountPrefferences/>
    </div>
  )
}

export default Account