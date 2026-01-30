import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const DashboardPage = lazy(() => import('./pages/DashboardPage'))

function AppShell() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center text-[var(--color-muted)]">
            Loading…
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default function App() {
  return <AppShell />
}
