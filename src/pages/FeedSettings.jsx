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
    <div>
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