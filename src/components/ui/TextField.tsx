import * as React from 'react'
import { cn } from '../../lib/cn'

export type TextFieldProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> & {
  leftAdornment?: React.ReactNode
}

export function TextField({
  className,
  leftAdornment,
  ...props
}: TextFieldProps) {
  return (
    <div
      className={cn(
        'flex h-[60px] items-center gap-2 rounded-2xl bg-[color:var(--color-bg)] px-6 pr-8',
        'ring-1 ring-transparent focus-within:ring-[color:var(--color-primary)]/30',
        'transition-[box-shadow,ring-color] duration-150',
        className
      )}
    >
      {leftAdornment ? (
        <span className="grid size-8 place-items-center text-[color:var(--color-primary)]">
          {leftAdornment}
        </span>
      ) : null}
      <input
        className={cn(
          'h-full w-full bg-transparent text-[18px] text-[color:var(--color-text)] placeholder:text-[color:var(--color-muted)]',
          'outline-none'
        )}
        {...props}
      />
    </div>
  )
}
