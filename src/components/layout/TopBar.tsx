import * as React from 'react'
import { TextField } from '../ui/TextField'
import { cn } from '../../lib/cn'

function MagnifierIcon() {
  return (
    <img
      src="./assets/icons/8121-151.svg"
      alt=""
      className="size-6"
      aria-hidden="true"
    />
  )
}

function ChevronDown() {
  return (
    <img
      src="./assets/icons/8121-132.svg"
      alt=""
      className="size-6"
      aria-hidden="true"
    />
  )
}

function NotificationBell() {
  return (
    <div className="relative grid size-12 place-items-center rounded-2xl bg-white">
      <svg
        viewBox="0 0 24 24"
        className="size-6 text-[color:var(--color-muted)]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 22a2.5 2.5 0 0 0 2.5-2.5h-5A2.5 2.5 0 0 0 12 22Z"
          fill="currentColor"
          opacity="0.6"
        />
        <path
          d="M18 16H6l1-2v-4a5 5 0 1 1 10 0v4l1 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      <span className="absolute right-3 top-2 size-2 rounded-full bg-[#eb5757]" />
    </div>
  )
}

export function TopBar({
  className,
  title,
}: {
  className?: string
  title: string
}) {
  return (
    <header
      className={cn(
        'flex h-[120px] items-center justify-between bg-white px-10',
        className
      )}
    >
      <h1 className="text-[36px] font-semibold leading-[50px] text-[color:var(--color-text)]">
        {title}
      </h1>

      <div className="flex items-center gap-10">
        <div className="w-[513px]">
          <TextField
            placeholder="Search here..."
            leftAdornment={<MagnifierIcon />}
            aria-label="Search"
          />
        </div>

        <button
          type="button"
          className="flex h-[60px] items-center gap-4 px-4 text-[18px] font-semibold text-black transition-colors hover:text-[color:var(--color-text)]"
        >
          <img
            src="./assets/icons/8121-115.svg"
            alt="US flag"
            className="size-6"
          />
          <span>Eng (US)</span>
          <ChevronDown />
        </button>

        <div className="flex items-center gap-6">
          <button
            type="button"
            className="rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)]/40"
            aria-label="Notifications"
          >
            <NotificationBell />
          </button>

          <button
            type="button"
            className="flex items-center gap-5 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)]/40"
            aria-label="User menu"
          >
            <div
              className="size-[60px] overflow-hidden rounded-2xl bg-[color:var(--color-border)]"
              aria-hidden="true"
            >
              <div className="h-full w-full bg-gradient-to-br from-[#c7d2fe] via-[#a5b4fc] to-[#60a5fa]" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <div className="text-[18px] font-semibold text-black">Musfiq</div>
              <div className="text-[12px] text-[color:var(--color-muted)]">Admin</div>
            </div>
            <ChevronDown />
          </button>
        </div>
      </div>
    </header>
  )
}
