import * as React from 'react'
import { cn } from '../../lib/cn'

type Series = {
  name: string
  color: string
  values: number[]
}

function toPoints(values: number[], w: number, h: number, pad: number) {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const span = Math.max(1, max - min)

  const innerW = w - pad * 2
  const innerH = h - pad * 2

  return values.map((v, i) => {
    const x = pad + (i / Math.max(1, values.length - 1)) * innerW
    const y = pad + (1 - (v - min) / span) * innerH
    return { x, y }
  })
}

function linePath(points: Array<{ x: number; y: number }>) {
  if (points.length === 0) return ''
  return points
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(2)},${p.y.toFixed(2)}`)
    .join(' ')
}

export function LineChart({
  className,
  labels,
  series,
  height = 180,
  emphasizeIndex,
  gradientFill,
}: {
  className?: string
  labels: string[]
  series: Series[]
  height?: number
  emphasizeIndex?: number
  gradientFill?: { seriesIndex: number; from: string; to: string }
}) {
  const width = 520
  const padding = 18

  return (
    <div className={cn('w-full', className)}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full"
        role="img"
        aria-label="Chart"
      >
        <defs>
          {gradientFill ? (
            <linearGradient
              id="lineChartFill"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor={gradientFill.from} stopOpacity="0.35" />
              <stop offset="100%" stopColor={gradientFill.to} stopOpacity="0" />
            </linearGradient>
          ) : null}
        </defs>

        <g opacity="0.7">
          {Array.from({ length: 4 }).map((_, idx) => {
            const y = padding + (idx / 3) * (height - padding * 2)
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

        {typeof emphasizeIndex === 'number' && labels[emphasizeIndex] ? (
          <line
            x1={
              padding +
              (emphasizeIndex / Math.max(1, labels.length - 1)) * (width - padding * 2)
            }
            x2={
              padding +
              (emphasizeIndex / Math.max(1, labels.length - 1)) * (width - padding * 2)
            }
            y1={padding - 4}
            y2={height - padding + 8}
            stroke="#f65b60"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.7"
          />
        ) : null}

        {series.map((s, sIdx) => {
          const pts = toPoints(s.values, width, height, padding)
          const path = linePath(pts)
          const last = pts.at(-1)
          const fillForSeries = gradientFill?.seriesIndex === sIdx
          const fillPath = fillForSeries
            ? `${path} L${(width - padding).toFixed(2)},${(height - padding).toFixed(
                2
              )} L${padding.toFixed(2)},${(height - padding).toFixed(2)} Z`
            : ''

          return (
            <g key={s.name}>
              {fillForSeries ? (
                <path d={fillPath} fill="url(#lineChartFill)" />
              ) : null}
              <path
                d={path}
                fill="none"
                stroke={s.color}
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {last ? (
                <circle cx={last.x} cy={last.y} r="4" fill={s.color} />
              ) : null}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

