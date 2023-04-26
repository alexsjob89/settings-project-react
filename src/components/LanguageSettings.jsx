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
    <div>
     <div>
        <h2>Display Language</h2>
        <p>
          {languages.find((lang) => lang.code === preferences.language).name}
        </p>
        <button onClick={() => setShowLanguageList(!showLanguageList)}>
          Change Language
        </button>
        {showLanguageList && (
          <ul>
            {languages.map((language) => (
              <li key={language.code}>
                <button
                  onClick={() => handleLanguageChange(language.code)}
                  disabled={preferences.language === language.code}
                >
                  {language.name}
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