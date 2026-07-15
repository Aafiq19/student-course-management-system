import React, { createContext, useState, useCallback, useEffect } from 'react'
import authApi from '../api/authApi'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem('authToken')
      if (token) {
        try {
          const response = await authApi.getCurrentUser()
          setUser(response.data)
        } catch (err) {
          localStorage.removeItem('authToken')
          setError(err.message)
        }
      }
      setLoading(false)
    }

    initializeAuth()
  }, [])

  const login = useCallback(async (credentials) => {
    try {
      setLoading(true)
      const response = await authApi.login(credentials)
      const { token, user: userData } = response.data
      localStorage.setItem('authToken', token)
      setUser(userData)
      setError(null)
      return userData
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const logout = useCallback(async () => {
    try {
      await authApi.logout()
      localStorage.removeItem('authToken')
      setUser(null)
      setError(null)
    } catch (err) {
      setError(err.message)
    }
  }, [])

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
