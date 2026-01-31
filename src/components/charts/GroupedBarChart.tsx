import * as React from 'react'
import { cn } from '../../lib/cn'

export function GroupedBarChart({
  className,
  labels,
  groups,
  height = 190,
}: {
  className?: string
  labels: string[]
  groups: Array<{ name: string; color: string; values: number[] }>
  height?: number
}) {
  const width = 560
  const padding = 18
  const max = Math.max(
    1,
    ...groups.flatMap((g) => g.values)
  )

  const innerW = width - padding * 2
  const innerH = height - padding * 2
  const columns = labels.length
  const barW = innerW / (columns * (groups.length + 1))
  const groupGap = barW

  return (
    <div className={cn('w-full', className)}>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" role="img" aria-label="Bar chart">
        <g opacity="0.7">
          {Array.from({ length: 4 }).map((_, idx) => {
            const y = padding + (idx / 3) * innerH
            return (
              <line
                key={idx}
                x1={padding}
                x2={width - padding}
                y1={y}
                y2={y}
                stroke="var(--color-border)"
                strokeWidth="1"
              />
            )
          })}
        </g>

        {labels.map((label, i) => {
          const x0 = padding + i * (groups.length * barW + groupGap)
          return (
            <g key={label}>
              {groups.map((g, gi) => {
                const v = g.values[i] ?? 0
                const h = (v / max) * innerH
                const x = x0 + gi * barW
                const y = padding + (innerH - h)
                return (
                  <rect
                    key={g.name}
                    x={x}
                    y={y}
                    width={barW * 0.78}
                    height={h}
                    rx="4"
                    fill={g.color}
                  />
                )
              })}

              <text
                x={x0 + (groups.length * barW) / 2}
                y={height - 4}
                fontSize="10"
                textAnchor="middle"
                fill="var(--color-muted)"
              >
                {label}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

