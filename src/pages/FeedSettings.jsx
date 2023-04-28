import React,{useState} from 'react';

const categories = [
  "Technology",
  "Sports",
  "Entertainment",
  "Health",
  "Business",
  // Add more categories here...
];

function FeedSettings() {
  const [settings, setSettings] = useState(
    categories.reduce((acc, category) => {
      acc[category] = true;
      return acc;
    }, {})
  );

  const handleToggleSetting = (category) => {
    setSettings({ ...settings, [category]: !settings[category] });
  };


  return (
    <div className='feed' style={{
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
      <h1>Feed Settings</h1>
      <h2>Categories</h2>
      <div>
        {categories.map((category) => (
          <div key={category}>
            <label>
              <input
                type="checkbox"
                checked={settings[category]}
                onChange={() => handleToggleSetting(category)}
              />
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeedSettings