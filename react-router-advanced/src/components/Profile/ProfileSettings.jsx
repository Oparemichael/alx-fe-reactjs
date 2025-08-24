import { useState } from 'react'

function ProfileSettings() {
  const [settings, setSettings] = useState({
    notifications: true,
    theme: 'light',
    language: 'en'
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div>
      <h2>Profile Settings</h2>
      <form style={{ maxWidth: '400px' }}>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
            />
            Enable Notifications
          </label>
        </div>
        
        <div className="form-group">
          <label>Theme:</label>
          <select
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem' }}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="auto">Auto</option>
          </select>
        </div>

        <div className="form-group">
          <label>Language:</label>
          <select
            name="language"
            value={settings.language}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem' }}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>

        <button type="button" className="btn btn-primary">
          Save Settings
        </button>
      </form>
    </div>
  )
}

export default ProfileSettings