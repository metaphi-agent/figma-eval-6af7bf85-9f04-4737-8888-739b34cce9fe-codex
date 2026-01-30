import { useMemo } from 'react'
import Icon from '../ui/Icon'
import { cn } from '../../lib/cn'
import Button from '../ui/Button'

type NavItem = {
  key: string
  label: string
  iconSrc: string
}

export default function Sidebar() {
  const items = useMemo<NavItem[]>(
    () => [
      { key: 'dashboard', label: 'Dashboard', iconSrc: './assets/icons/dashboard.svg' },
      { key: 'leaderboard', label: 'Leaderboard', iconSrc: './assets/icons/leaderboard.svg' },
      { key: 'order', label: 'order', iconSrc: './assets/icons/order.svg' },
      { key: 'products', label: 'Products', iconSrc: './assets/icons/products.svg' },
      { key: 'sales', label: 'Sales Report', iconSrc: './assets/icons/sales-report.svg' },
      { key: 'messages', label: 'Messages', iconSrc: './assets/icons/messages.svg' },
      { key: 'settings', label: 'Settings', iconSrc: './assets/icons/settings.svg' },
      { key: 'signout', label: 'Sign Out', iconSrc: './assets/icons/sign-out.svg' },
    ],
    []
  )

  const activeKey = 'dashboard'

  return (
    <aside className="flex h-screen w-[345px] flex-col bg-white">
      <div className="flex items-center gap-4 px-11 pt-12">
        <div className="grid h-14 w-14 place-items-center rounded-lg bg-[var(--color-primary)]">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
            <path
              d="M9.2 7.3c1.4-2 4.3-2.5 6.3-1.1l2.8 2.1c2 1.4 2.5 4.3 1.1 6.3-1.4 2-4.3 2.5-6.3 1.1l-2.8-2.1c-2-1.4-2.5-4.3-1.1-6.3Z"
              fill="white"
              opacity="0.9"
            />
            <path
              d="M6.5 18.7c-1.7-1.3-2.1-3.7-.8-5.4 1.3-1.7 3.7-2.1 5.4-.8l3.4 2.6c1.7 1.3 2.1 3.7.8 5.4-1.3 1.7-3.7 2.1-5.4.8l-3.4-2.6Z"
              fill="white"
              opacity="0.55"
            />
          </svg>
        </div>
        <div className="text-[30px] font-semibold leading-[45px] text-[var(--color-text)]">
          Dabang
        </div>
      </div>

      <nav className="mt-16 px-11">
        <ul className="space-y-5">
          {items.map((item) => {
            const isActive = item.key === activeKey
            return (
              <li key={item.key}>
                <button
                  type="button"
                  className={cn(
                    'group flex w-full items-center gap-6 rounded-2xl px-6 py-4 text-left text-[18px] leading-[27px] transition-colors',
                    isActive
                      ? 'bg-[var(--color-primary)] text-white shadow-[var(--shadow-soft)]'
                      : 'text-[var(--color-muted)] hover:bg-[var(--color-input)]'
                  )}
                >
                  <Icon
                    src={item.iconSrc}
                    alt=""
                    className={cn('h-8 w-8', isActive ? 'invert brightness-0' : 'opacity-90')}
                  />
                  <span className={cn(isActive ? 'font-semibold' : 'font-normal')}>
                    {item.label}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="mt-auto px-11 pb-10">
        <div className="relative overflow-hidden rounded-2xl bg-[var(--color-primary)] px-6 py-7 text-white">
          <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-white/20" />
          <div className="absolute -left-12 bottom-6 h-44 w-44 rounded-full bg-white/15" />

          <div className="relative">
            <div className="text-lg font-semibold">Dabang Pro</div>
            <p className="mt-2 max-w-[14rem] text-xs leading-5 text-white/80">
              Get access to all features on tetumbas
            </p>
            <div className="mt-5">
              <Button
                variant="outline"
                size="sm"
                className="h-10 w-[136px] rounded-lg bg-white text-[var(--color-primary)] hover:bg-white/95"
              >
                Get Pro
              </Button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
