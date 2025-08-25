import { useState, useEffect } from 'react'

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Simulate checking authentication status (e.g., from localStorage, context, etc.)
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('isAuthenticated')
      setIsAuthenticated(authStatus === 'true')
    }

    checkAuth()
    
    // Optional: Listen for storage changes if needed
    const handleStorageChange = () => {
      checkAuth()
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const login = () => {
    setIsAuthenticated(true)
    localStorage.setItem('isAuthenticated', 'true')
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('isAuthenticated')
  }

  return {
    isAuthenticated,
    login,
    logout
  }
}