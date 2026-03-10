import { createRootRoute, Outlet } from '@tanstack/react-router'
import { useState } from 'react'
import { Sidebar } from '~/components/Sidebar'
import { Navbar } from '~/components/Navbar'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 min-w-0 p-6 lg:p-10 max-w-4xl mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
