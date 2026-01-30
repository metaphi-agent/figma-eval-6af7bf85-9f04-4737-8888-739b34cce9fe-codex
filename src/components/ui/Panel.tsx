import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export type PanelProps = {
  title: string
  subtitle?: string
  action?: ReactNode
  children: ReactNode
  className?: string
}

export default function Panel({ title, subtitle, action, children, className }: PanelProps) {
  return (
    <section
      className={cn(
        'rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]',
        className
      )}
    >
      <div className="flex items-start justify-between gap-4 px-7 pt-7">
        <div>
          <h2 className="text-lg font-semibold text-[var(--color-text)]">{title}</h2>
          {subtitle ? (
            <p className="mt-1 text-sm text-[var(--color-muted)]">{subtitle}</p>
          ) : null}
        </div>
        {action ? <div className="pt-0.5">{action}</div> : null}
      </div>
      <div className="px-7 pb-7">{children}</div>
    </section>
  )
}

