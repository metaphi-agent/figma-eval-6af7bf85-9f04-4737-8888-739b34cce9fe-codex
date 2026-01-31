import * as React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const DashboardPage = React.lazy(() => import('./pages/Dashboard'))

function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-[color:var(--color-bg)]">
      <div className="text-center">
        <div className="text-2xl font-semibold text-[color:var(--color-text)]">
          Loading…
        </div>
        <div className="mt-2 text-sm text-[color:var(--color-muted)]">
          Preparing dashboard
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </React.Suspense>
  )
}
