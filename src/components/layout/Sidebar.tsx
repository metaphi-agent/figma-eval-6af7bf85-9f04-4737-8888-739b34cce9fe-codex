import * as React from 'react'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'

type NavItem = {
  id: string
  label: string
  icon: React.ReactNode
}

function DotLogo() {
  return (
    <div className="grid size-14 place-items-center rounded-lg bg-[color:var(--color-primary)]">
      <svg
        viewBox="0 0 24 24"
        className="size-7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16.9 5.7a6.2 6.2 0 0 0-9.6 7.6l3.1-3.1a2 2 0 0 1 2.9 0l3.1 3.1a6.2 6.2 0 0 0 .5-7.6Z"
          fill="white"
          opacity="0.9"
        />
        <path
          d="M7.6 18.3a6.2 6.2 0 0 0 8.8 0l-3.1-3.1a2 2 0 0 0-2.9 0l-3.1 3.1Z"
          fill="white"
          opacity="0.9"
        />
      </svg>
    </div>
  )
}

function NavIcon({ children }: { children: React.ReactNode }) {
  return <span className="grid size-8 place-items-center">{children}</span>
}

const navItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
        <path
          d="M12 13.2a1.2 1.2 0 0 1-1.2-1.2V3.6A8.4 8.4 0 1 0 20.4 12h-8.4Z"
          fill="currentColor"
        />
        <path
          d="M13.2 3.6V12h8.4A8.4 8.4 0 0 0 13.2 3.6Z"
          fill="currentColor"
          opacity="0.35"
        />
      </svg>
    ),
  },
  {
    id: 'leaderboard',
    label: 'Leaderboard',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
        <path
          d="M6 21V11M12 21V3M18 21v-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'order',
    label: 'order',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
        <path
          d="M7 7h14l-1.2 7.2a2 2 0 0 1-2 1.7H9.1a2 2 0 0 1-2-1.6L5.5 4.5H3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17.5 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'products',
    label: 'Products',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
        <path
          d="M6 8h12l-1 13H7L6 8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 8a3 3 0 0 1 6 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'sales-report',
    label: 'Sales Report',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
        <path
          d="M4 19V5m0 14h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M7 14l3-3 3 2 5-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
        <path
          d="M20 14a4 4 0 0 1-4 4H8l-4 3V6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8 8h8M8 12h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
        <path
          d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M19.4 15a8.8 8.8 0 0 0 .1-2l2-1.5-2-3.5-2.4.7a8.5 8.5 0 0 0-1.7-1L15 5h-6l-.4 2.7a8.5 8.5 0 0 0-1.7 1L4.5 8 2.5 11.5 4.6 13a8.8 8.8 0 0 0 .1 2l-2 1.5 2 3.5 2.4-.7c.5.4 1.1.7 1.7 1L9 23h6l.4-2.7c.6-.3 1.2-.6 1.7-1l2.4.7 2-3.5-2.1-1.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export function Sidebar({
  className,
  activeId,
  onSelect,
}: {
  className?: string
  activeId: string
  onSelect: (id: string) => void
}) {
  return (
    <aside
      className={cn(
        'flex h-full w-[345px] flex-col bg-white px-11 py-10',
        className
      )}
    >
      <div className="flex items-center gap-5">
        <DotLogo />
        <div className="text-[30px] font-semibold leading-[45px] text-[color:var(--color-text)]">
          Dabang
        </div>
      </div>

      <nav className="mt-14 flex flex-col gap-10">
        {navItems.map((item) => {
          const isActive = item.id === activeId
          return (
            <button
              key={item.id}
              type="button"
              className={cn(
                'flex items-center gap-6 text-left text-[18px] leading-[27px] transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
                isActive
                  ? 'rounded-2xl bg-[color:var(--color-primary)] px-6 py-4 text-white shadow-[0_20px_50px_rgba(55,69,87,0.10)]'
                  : 'px-2 text-[color:var(--color-muted)] hover:text-[color:var(--color-text)]'
              )}
              onClick={() => onSelect(item.id)}
            >
              <NavIcon>{item.icon}</NavIcon>
              <span className="truncate">{item.label}</span>
            </button>
          )
        })}

        <button
          type="button"
          className="flex items-center gap-6 px-2 text-[18px] leading-[27px] text-[color:var(--color-muted)] transition-colors hover:text-[color:var(--color-text)]"
        >
          <NavIcon>
            <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
              <path
                d="M10 17l5-5-5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 12H3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </NavIcon>
          <span>Sign Out</span>
        </button>
      </nav>

      <div className="mt-auto pt-10">
        <div className="rounded-3xl bg-[color:var(--color-primary)] p-7 text-white">
          <div className="grid place-items-center">
            <div className="grid size-12 place-items-center rounded-2xl bg-white/10">
              <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
                <path
                  d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"
                  fill="white"
                  opacity="0.2"
                />
                <path
                  d="M12 7v5l3 2"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="mt-5 text-center text-base font-semibold">
            Dabang Pro
          </div>
          <div className="mt-2 text-center text-xs text-white/80">
            Get access to all features on tetumbas
          </div>
          <div className="mt-6 grid place-items-center">
            <Button variant="secondary" className="h-10 w-full rounded-xl">
              Get Pro
            </Button>
          </div>
        </div>
      </div>
    </aside>
  )
}
