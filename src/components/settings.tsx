import React, { useState } from 'react';

export default function Settings(){
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [location, setLocation] = useState(''); 
    const [language, setLanguage] = useState(''); 
    const [notificationsEnabled, setNotificationsEnabled] = useState(false); 
    const [soundVolume, setSoundVolume] = useState(50); 
    const [musicVolume, setMusicVolume] = useState(50); 

    const saveSettings = () => {
        // save user's settings here
      };
    
      return (
        <div className="settings-container">
          <h1>Settings</h1>
          <div className="profile-picture">
            {/* profile picture */}
          </div>
          <div className="setting-item">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button>Edit Picture</button>
          </div>
          {/* Repeat  */}
          <div className="setting-item">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Edit Picture</button>
          </div>
          {/* Location, Language, Sound, Music, and Notifications settings */}
          {/* Use appropriate form elements for each setting */}
          {/* Implement sound and music volume bars */}
          {/* Implement notifications toggle */}
          <div className="actions">
            <button onClick={saveSettings}>Save Settings</button>
          </div>
        </div>
      );

}