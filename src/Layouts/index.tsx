import React from 'react'
import { Outlet } from 'react-router-dom'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Layout */}
      {/* {children} */}
      <Outlet />
    </div>
  )
}

export default Layout
