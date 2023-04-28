import React,{useState} from 'react';

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  {code: "ro", name: "Romania"},
   {code: "it", name: "Itali"}

 ];

 function LanguageSettings() {
  const [preferences, setPreferences] = useState({
   language: languages[0].code,
 });
 const [showLanguageList, setShowLanguageList] = useState(false);

 const handleLanguageChange = (newLanguageCode) => {
   setPreferences({ ...preferences, language: newLanguageCode });
   setShowLanguageList(false);
 };

  return (
    <div className='Languages' style={{
      width: "35rem",
      height: "17rem",
      position: "relative",
      top: "0",
      right:"30px",
      backgroundColor:"white",
      borderRadius: "20px",
      paddingLeft: "10px",
      }}>
     <div>
        <h2 className='beta'>Display Language</h2>
        <h3>Select the language you'd like to experience the interface in. Note that this won't change
the language of user-generated content.</h3>
        <p>
          {languages.find((lang) => lang.code === preferences.language).name}
        </p>
        <button style={{
  border: "none",
  background: "#263562",
  color: "white",
  borderRadius: "40px",
  padding: "10px",
  zIndex: "2"}} onClick={() => setShowLanguageList(!showLanguageList)}>
          Change Language
        </button>
        {showLanguageList && (
          <ul>
            {languages.map((language) => (
              <li key={language.code}>
                <button style={{

  background: "white",
  border:"1ps solid #263562",
  color: "#263562",
  borderRadius: "40px",
  zIndex: "2",
  padding: "6px"}}
                  onClick={() => handleLanguageChange(language.code)}
                  disabled={preferences.language === language.code}
                >
                  <div>{language.name}</div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default LanguageSettings