import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import BlogPost from './components/BlogPost'
import Login from './components/Login'
import './App.css'

function App() {
  const { isAuthenticated, login, logout } = useAuth()

  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <h2>React Router Advanced</h2>
            <ul className="nav-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/blog/post-1">Blog Post 1</Link></li>
              <li><Link to="/blog/post-2">Blog Post 2</Link></li>
              {isAuthenticated ? (
                <li>
                  <button onClick={logout} className="logout-btn">
                    Logout
                  </button>
                </li>
              ) : (
                <li><Link to="/login">Login</Link></li>
              )}
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route 
              path="/profile/*" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route 
              path="/login" 
              element={
                isAuthenticated ? 
                <Navigate to="/profile" replace /> : 
                <Login onLogin={login} />
              } 
            />
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App