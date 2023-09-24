import React, { useState } from 'react';
import Slider from './Slider';

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
            {
                <image>

                </image>

            }
          </div>
          <button>Edit Picture</button>

          <div className="setting-item">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div className="setting-item">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="setting-item">
            <label>Location:</label>
            <input
              type="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="setting-item">
            <label>Language:</label>
            <input
              type="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </div>

          <div>
            <Slider
                label="Sound Volume"
                value={soundVolume}
            />
            <Slider
                label="Music Volume"
                value={musicVolume}
            />
          </div>

          <div className="actions">
            <button onClick={saveSettings}>Save Settings</button>
          </div>
        </div>
      );

}