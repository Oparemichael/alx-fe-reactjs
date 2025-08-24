import { Routes, Route, Link, useLocation, Outlet } from 'react-router-dom'
import ProfileDetails from './ProfileDetails'
import ProfileSettings from './ProfileSettings'
import ProfileOrders from './ProfileOrders'

function Profile() {
  const location = useLocation()

  return (
    <div className="card">
      <h1>User Profile</h1>
      
      {/* Navigation Tabs */}
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

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route path="orders" element={<ProfileOrders />} />
        <Route path="/" element={<Navigate to="details" replace />} />
      </Routes>

      {/* Alternatively, you can use Outlet */}
      {/* <Outlet /> */}
    </div>
  )
}

export default Profile