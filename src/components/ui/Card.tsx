import * as React from 'react'
import { cn } from '../../lib/cn'

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-[20px] bg-white ring-1 ring-[color:var(--color-border)] shadow-[var(--shadow-card)]',
        className
      )}
      {...props}
    />
  )
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-7 pt-6', className)} {...props} />
}

export function CardBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-7 pb-6', className)} {...props} />
}
