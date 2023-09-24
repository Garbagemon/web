import React, { useState } from 'react';

function NotificationSwitch() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleNotificationToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
    // Implement logic to save notification settings to your app state or server
  };

  return (
    <div className="notification-switch">
      <label>Notifications:</label>
      <input
        type="checkbox"
        checked={notificationsEnabled}
        onChange={handleNotificationToggle}
      />
    </div>
  );
}

export default NotificationSwitch;
