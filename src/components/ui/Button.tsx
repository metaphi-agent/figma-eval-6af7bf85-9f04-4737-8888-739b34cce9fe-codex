import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type ButtonVariant = 'primary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  isLoading?: boolean
}

export default function Button({
  className,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  isLoading,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30',
        'disabled:opacity-60 disabled:pointer-events-none',
        size === 'sm' && 'h-10 px-4 text-sm',
        size === 'md' && 'h-12 px-5 text-[15px]',
        variant === 'primary' &&
          'bg-[var(--color-primary)] text-white hover:bg-[color-mix(in_srgb,var(--color-primary)_92%,black)]',
        variant === 'outline' &&
          'bg-white text-[var(--color-text)] ring-1 ring-[var(--color-border)] hover:bg-[var(--color-input)]',
        variant === 'ghost' &&
          'bg-transparent text-[var(--color-text)] hover:bg-[var(--color-input)]',
        className
      )}
      {...props}
    >
      {isLoading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      ) : (
        leftIcon
      )}
      <span>{children}</span>
      {rightIcon}
    </button>
  )
}

