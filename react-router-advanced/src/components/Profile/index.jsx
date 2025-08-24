import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom'
import ProfileDetails from './ProfileDetails'
import ProfileSettings from './ProfileSettings'
import ProfileOrders from './ProfileOrders'

function Profile() {
  const location = useLocation()

  return (
    <div className="card">
      <h1>User Profile</h1>
      
      <nav className="tabs">
        <Link 
          to="details" 
          className={`tab-link ${location.pathname.includes('details') ? 'active' : ''}`}
        >
          Details
        </Link>
        <Link 
          to="settings" 
          className={`tab-link ${location.pathname.includes('settings') ? 'active' : ''}`}
        >
          Settings
        </Link>
        <Link 
          to="orders" 
          className={`tab-link ${location.pathname.includes('orders') ? 'active' : ''}`}
        >
          Orders
        </Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route path="orders" element={<ProfileOrders />} />
        <Route path="/" element={<Navigate to="details" replace />} />
      </Routes>
    </div>
  )
}

export default Profile