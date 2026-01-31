import * as React from 'react'
import { cn } from '../../lib/cn'

export function StackedBarChart({
  className,
  labels,
  stacks,
  height = 200,
}: {
  className?: string
  labels: string[]
  stacks: Array<{ name: string; color: string; values: number[] }>
  height?: number
}) {
  const width = 420
  const padding = 18

  const totals = labels.map((_, i) => stacks.reduce((acc, s) => acc + (s.values[i] ?? 0), 0))
  const max = Math.max(1, ...totals)
  const innerW = width - padding * 2
  const innerH = height - padding * 2
  const barW = innerW / labels.length

  return (
    <div className={cn('w-full', className)}>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" role="img" aria-label="Stacked bar chart">
        {labels.map((label, i) => {
          const x = padding + i * barW + barW * 0.22
          const w = barW * 0.56
          let yCursor = padding + innerH

          return (
            <g key={i}>
              {stacks.map((s) => {
                const v = s.values[i] ?? 0
                const h = (v / max) * innerH
                yCursor -= h
                return (
                  <rect
                    key={s.name}
                    x={x}
                    y={yCursor}
                    width={w}
                    height={h}
                    rx="3"
                    fill={s.color}
                  />
                )
              })}
              {label ? (
                <text
                  x={padding + i * barW + barW / 2}
                  y={height - 4}
                  fontSize="10"
                  textAnchor="middle"
                  fill="var(--color-muted)"
                >
                  {label}
                </text>
              ) : null}
            </g>
          )
        })}
      </svg>
    </div>
  )
}
