import UserPage from 'src/pages/user'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layouts'
import './App.css'

type AppProps = {}

const App: React.FC<AppProps> = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/user" element={<UserPage />} />
        <Route key="home" path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
