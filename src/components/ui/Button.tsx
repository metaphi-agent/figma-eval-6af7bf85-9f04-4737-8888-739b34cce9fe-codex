import * as React from 'react'
import { cn } from '../../lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
}

export function Button({
  className,
  variant = 'secondary',
  size = 'md',
  isLoading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium',
        'transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)]/40',
        isDisabled && 'cursor-not-allowed opacity-60',
        size === 'sm' && 'h-10 px-3 text-sm',
        size === 'md' && 'h-10 px-4 text-sm',
        variant === 'primary' && [
          'bg-[color:var(--color-primary)] text-white shadow-sm',
          'hover:bg-[color:var(--color-primary)]/90 active:bg-[color:var(--color-primary)]/85',
        ],
        variant === 'secondary' && [
          'bg-white text-[color:var(--color-text)] ring-1 ring-[color:var(--color-border)] shadow-sm',
          'hover:bg-[color:var(--color-bg)] active:bg-[color:var(--color-bg)]/70',
        ],
        variant === 'ghost' && [
          'bg-transparent text-[color:var(--color-muted)]',
          'hover:bg-[color:var(--color-bg)] active:bg-[color:var(--color-bg)]/70',
        ],
        className
      )}
      disabled={isDisabled}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {isLoading ? (
        <span
          aria-hidden="true"
          className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      ) : null}
      {children}
    </button>
  )
}
