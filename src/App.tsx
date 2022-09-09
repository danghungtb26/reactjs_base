import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layouts'

type AppProps = {}

const App: React.FC<AppProps> = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route key="home" path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
