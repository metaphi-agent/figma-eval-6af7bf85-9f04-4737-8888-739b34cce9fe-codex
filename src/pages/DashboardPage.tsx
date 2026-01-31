import Sidebar from '../components/blocks/Sidebar'
import TopBar from '../components/blocks/TopBar'
import Panel from '../components/ui/Panel'
import Button from '../components/ui/Button'
import { cn } from '../lib/cn'

type Stat = {
  label: string
  value: string
  change: string
  changeTone: 'pos' | 'neg' | 'neutral'
  bg: string
  iconBg: string
  icon: JSX.Element
}

function StatCard({ stat }: { stat: Stat }) {
  const changeColor =
    stat.changeTone === 'pos'
      ? 'text-[#34CAA5]'
      : stat.changeTone === 'neg'
        ? 'text-[#EB6B6B]'
        : 'text-[var(--color-muted)]'

  return (
    <div className={cn('rounded-2xl p-5', stat.bg)}>
      <div className={cn('grid h-11 w-11 place-items-center rounded-full', stat.iconBg)}>
        {stat.icon}
      </div>
      <div className="mt-4 text-[22px] font-semibold text-[var(--color-text)]">{stat.value}</div>
      <div className="mt-1 text-sm text-[var(--color-muted)]">{stat.label}</div>
      <div className={cn('mt-2 text-[11px] font-medium', changeColor)}>{stat.change}</div>
    </div>
  )
}

function VisitorInsightsChart() {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Sept', 'Oct', 'Nov', 'Des']
  const series = [
    { name: 'Loyal Customers', color: '#7C3AED', data: [320, 280, 230, 250, 290, 310, 280, 260, 220, 160] },
    { name: 'New Customers', color: '#F43F5E', data: [260, 240, 210, 230, 290, 340, 360, 320, 240, 150] },
    { name: 'Unique Customers', color: '#22C55E', data: [350, 320, 280, 240, 260, 300, 330, 300, 260, 200] },
  ]
  const width = 520
  const height = 170
  const padding = { left: 34, right: 16, top: 16, bottom: 28 }
  const minY = 100
  const maxY = 400

  const toX = (i: number) =>
    padding.left + (i * (width - padding.left - padding.right)) / (labels.length - 1)
  const toY = (v: number) =>
    padding.top + ((maxY - v) * (height - padding.top - padding.bottom)) / (maxY - minY)

  return (
    <div className="mt-6">
      <svg width="100%" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Visitor insights">
        {[100, 200, 300, 400].map((t) => (
          <g key={t}>
            <text
              x={0}
              y={toY(t) + 4}
              fontSize="10"
              fill="var(--color-muted)"
              fontFamily="var(--font-sans)"
            >
              {t}
            </text>
            <line
              x1={padding.left}
              y1={toY(t)}
              x2={width - padding.right}
              y2={toY(t)}
              stroke="#EEF0F4"
              strokeWidth="1"
            />
          </g>
        ))}

        {series.map((s) => {
          const d = s.data
            .map((v, i) => `${i === 0 ? 'M' : 'L'} ${toX(i)} ${toY(v)}`)
            .join(' ')
          return (
            <path
              key={s.name}
              d={d}
              fill="none"
              stroke={s.color}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )
        })}

        {labels.map((l, i) => (
          <text
            key={l}
            x={toX(i)}
            y={height - 8}
            fontSize="10"
            textAnchor="middle"
            fill="var(--color-muted)"
            fontFamily="var(--font-sans)"
          >
            {l}
          </text>
        ))}
      </svg>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-5 text-xs text-[var(--color-muted)]">
        {series.map((s) => (
          <div key={s.name} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-sm" style={{ background: s.color }} />
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function RevenueBarChart() {
  const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const online = [14, 17, 7, 16, 12, 17, 22]
  const offline = [12, 12, 22, 7, 13, 13, 11]

  const width = 560
  const height = 190
  const padding = { left: 34, right: 10, top: 16, bottom: 28 }
  const maxY = 25

  const band = (width - padding.left - padding.right) / labels.length
  const barW = 12
  const toY = (v: number) =>
    padding.top + ((maxY - v) * (height - padding.top - padding.bottom)) / maxY

  return (
    <div className="mt-6">
      <svg width="100%" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Total revenue">
        {[0, 5, 10, 15, 20, 25].map((t) => (
          <g key={t}>
            <text
              x={0}
              y={toY(t) + 4}
              fontSize="10"
              fill="var(--color-muted)"
              fontFamily="var(--font-sans)"
            >
              {t}k
            </text>
            <line
              x1={padding.left}
              y1={toY(t)}
              x2={width - padding.right}
              y2={toY(t)}
              stroke="#EEF0F4"
              strokeWidth="1"
            />
          </g>
        ))}

        {labels.map((_, i) => {
          const x0 = padding.left + i * band + band / 2
          const onlineH = height - padding.bottom - toY(online[i])
          const offlineH = height - padding.bottom - toY(offline[i])
          return (
            <g key={i}>
              <rect
                x={x0 - barW - 4}
                y={toY(online[i])}
                width={barW}
                height={onlineH}
                rx="4"
                fill="#3B82F6"
              />
              <rect
                x={x0 + 4}
                y={toY(offline[i])}
                width={barW}
                height={offlineH}
                rx="4"
                fill="#34CAA5"
              />
            </g>
          )
        })}

        {labels.map((l, i) => (
          <text
            key={l}
            x={padding.left + i * band + band / 2}
            y={height - 8}
            fontSize="10"
            textAnchor="middle"
            fill="var(--color-muted)"
            fontFamily="var(--font-sans)"
          >
            {l}
          </text>
        ))}
      </svg>

      <div className="mt-4 flex items-center justify-center gap-6 text-xs text-[var(--color-muted)]">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-sm bg-[#3B82F6]" />
          <span>Online Sales</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-sm bg-[#34CAA5]" />
          <span>Offline Sales</span>
        </div>
      </div>
    </div>
  )
}

function CustomerSatisfactionChart() {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  const lastMonth = [260, 290, 200, 210, 215, 260]
  const thisMonth = [340, 310, 330, 300, 280, 360]
  const width = 360
  const height = 190
  const padding = { left: 18, right: 18, top: 16, bottom: 26 }
  const minY = 160
  const maxY = 380

  const toX = (i: number) =>
    padding.left + (i * (width - padding.left - padding.right)) / (labels.length - 1)
  const toY = (v: number) =>
    padding.top + ((maxY - v) * (height - padding.top - padding.bottom)) / (maxY - minY)

  const line = (arr: number[]) =>
    arr.map((v, i) => `${i === 0 ? 'M' : 'L'} ${toX(i)} ${toY(v)}`).join(' ')

  const lastD = line(lastMonth)
  const area = `${lastD} L ${toX(labels.length - 1)} ${height - padding.bottom} L ${toX(0)} ${
    height - padding.bottom
  } Z`

  return (
    <div className="mt-6">
      <svg width="100%" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Customer satisfaction">
        <defs>
          <linearGradient id="blueFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path d={area} fill="url(#blueFill)" />
        <path
          d={lastD}
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={line(thisMonth)}
          fill="none"
          stroke="#34CAA5"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {thisMonth.map((v, i) => (
          <circle key={i} cx={toX(i)} cy={toY(v)} r="3.2" fill="#34CAA5" />
        ))}
        {lastMonth.map((v, i) => (
          <circle key={i} cx={toX(i)} cy={toY(v)} r="3.2" fill="#3B82F6" />
        ))}
      </svg>

      <div className="mt-2 flex items-end justify-between">
        <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
          <span className="h-2.5 w-2.5 rounded-sm bg-[#3B82F6]" />
          <span>Last Month</span>
          <span className="ml-2 text-[13px] font-semibold text-[var(--color-text)]">$3,004</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
          <span className="h-2.5 w-2.5 rounded-sm bg-[#34CAA5]" />
          <span>This Month</span>
          <span className="ml-2 text-[13px] font-semibold text-[var(--color-text)]">$4,504</span>
        </div>
      </div>
    </div>
  )
}

function TargetRealityChart() {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July']
  const reality = [7, 6, 9, 8, 12, 10, 11]
  const target = [8, 7, 10, 9, 13, 12, 14]
  const width = 320
  const height = 190
  const padding = { left: 16, right: 16, top: 16, bottom: 28 }
  const maxY = 15

  const band = (width - padding.left - padding.right) / labels.length
  const barW = 10
  const toY = (v: number) =>
    padding.top + ((maxY - v) * (height - padding.top - padding.bottom)) / maxY

  return (
    <div className="mt-6">
      <svg width="100%" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Target vs reality">
        {labels.map((_, i) => {
          const x0 = padding.left + i * band + band / 2
          const rH = height - padding.bottom - toY(reality[i])
          const tH = height - padding.bottom - toY(target[i])
          return (
            <g key={i}>
              <rect x={x0 - barW - 3} y={toY(reality[i])} width={barW} height={rH} rx="3" fill="#34CAA5" />
              <rect x={x0 + 3} y={toY(target[i])} width={barW} height={tH} rx="3" fill="#FBBF24" />
            </g>
          )
        })}
        {labels.map((l, i) => (
          <text
            key={l}
            x={padding.left + i * band + band / 2}
            y={height - 8}
            fontSize="10"
            textAnchor="middle"
            fill="var(--color-muted)"
            fontFamily="var(--font-sans)"
          >
            {l}
          </text>
        ))}
      </svg>

      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between gap-3 rounded-xl bg-[var(--color-input)] px-3 py-2">
          <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
            <span className="h-2.5 w-2.5 rounded-sm bg-[#34CAA5]" />
            <div>
              <div className="text-[11px]">Reality Sales</div>
              <div className="text-[10px] text-[var(--color-muted)]/80">Global</div>
            </div>
          </div>
          <div className="text-xs font-semibold text-[#34CAA5]">8.823</div>
        </div>

        <div className="flex items-center justify-between gap-3 rounded-xl bg-[var(--color-input)] px-3 py-2">
          <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
            <span className="h-2.5 w-2.5 rounded-sm bg-[#FBBF24]" />
            <div>
              <div className="text-[11px]">Target Sales</div>
              <div className="text-[10px] text-[var(--color-muted)]/80">Commercial</div>
            </div>
          </div>
          <div className="text-xs font-semibold text-[#FBBF24]">12.122</div>
        </div>
      </div>
    </div>
  )
}

function VolumeServiceChart() {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
  const volume = [18, 22, 20, 18, 16, 15, 14]
  const services = [12, 10, 9, 11, 10, 12, 9]
  const width = 320
  const height = 190
  const padding = { left: 18, right: 16, top: 16, bottom: 28 }
  const maxY = 25
  const band = (width - padding.left - padding.right) / labels.length
  const barW = 12
  const toY = (v: number) =>
    padding.top + ((maxY - v) * (height - padding.top - padding.bottom)) / maxY

  return (
    <div className="mt-6">
      <svg width="100%" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Volume vs service level">
        {labels.map((_, i) => {
          const x = padding.left + i * band + band / 2 - barW / 2
          const vY = toY(volume[i])
          const sY = toY(services[i])
          return (
            <g key={i}>
              <rect x={x} y={vY} width={barW} height={height - padding.bottom - vY} rx="3" fill="#3B82F6" />
              <rect x={x} y={sY} width={barW} height={height - padding.bottom - sY} rx="3" fill="#34CAA5" opacity="0.85" />
            </g>
          )
        })}
      </svg>
      <div className="mt-4 flex items-center justify-center gap-6 text-xs text-[var(--color-muted)]">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-sm bg-[#3B82F6]" />
          <span>Volume</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-sm bg-[#34CAA5]" />
          <span>Services</span>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-center gap-10 text-xs text-[var(--color-muted)]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-sm bg-[#3B82F6]" />
          <span>
            Volume <span className="ml-2 font-semibold text-[var(--color-text)]">1,135</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-sm bg-[#34CAA5]" />
          <span>
            Services <span className="ml-2 font-semibold text-[var(--color-text)]">635</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  const stats: Stat[] = [
    {
      label: 'Total Sales',
      value: '$1k',
      change: '+8% from yesterday',
      changeTone: 'pos',
      bg: 'bg-[#FFE5E5]',
      iconBg: 'bg-white/60',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 19V5" stroke="#EB6B6B" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 19V11" stroke="#EB6B6B" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 19V7" stroke="#EB6B6B" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 19V13" stroke="#EB6B6B" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 19V9" stroke="#EB6B6B" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: 'Total Order',
      value: '300',
      change: '+5% from yesterday',
      changeTone: 'pos',
      bg: 'bg-[#FFF1D7]',
      iconBg: 'bg-white/60',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 7h12" stroke="#FEAF6A" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 12h12" stroke="#FEAF6A" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 17h12" stroke="#FEAF6A" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: 'Product Sold',
      value: '5',
      change: '+1.2% from yesterday',
      changeTone: 'pos',
      bg: 'bg-[#DFF8E6]',
      iconBg: 'bg-white/60',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3"
            stroke="#34CAA5"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6 10h12l-1 11H7L6 10Z"
            stroke="#34CAA5"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: 'New Customers',
      value: '8',
      change: '0.5% from yesterday',
      changeTone: 'neutral',
      bg: 'bg-[#EFE7FF]',
      iconBg: 'bg-white/60',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
            stroke="#7C3AED"
            strokeWidth="2"
          />
          <path
            d="M20 21a8 8 0 0 0-16 0"
            stroke="#7C3AED"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ]

  const topProducts = [
    { id: '01', name: 'Home Decor Range', popularity: 0.7, sales: '45%', salesTone: 'blue' as const },
    { id: '02', name: 'Disney Princess Pink Bag 18’', popularity: 0.55, sales: '29%', salesTone: 'green' as const },
    { id: '03', name: 'Bathroom Essentials', popularity: 0.42, sales: '18%', salesTone: 'purple' as const },
    { id: '04', name: 'Apple Smartwatches', popularity: 0.6, sales: '25%', salesTone: 'orange' as const },
  ]

  const salesBadge = (tone: 'blue' | 'green' | 'purple' | 'orange') => {
    if (tone === 'blue') return 'bg-[#E8F0FF] text-[#3B82F6]'
    if (tone === 'green') return 'bg-[#E8FFF3] text-[#34CAA5]'
    if (tone === 'purple') return 'bg-[#EFE7FF] text-[#7C3AED]'
    return 'bg-[#FFF1D7] text-[#FEAF6A]'
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <TopBar />

        <main className="mx-auto w-full max-w-[1575px] px-8 pb-10 pt-8">
          <div className="grid grid-cols-[minmax(0,1fr)_591px] gap-8">
            <Panel
              title="Today's Sales"
              subtitle="Sales Summary"
              action={
                <Button
                  variant="outline"
                  size="sm"
                  leftIcon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 14V4"
                        stroke="var(--color-text)"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8 10l4 4 4-4"
                        stroke="var(--color-text)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 20h14"
                        stroke="var(--color-text)"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  }
                  className="h-10 rounded-lg px-4 text-[13px]"
                >
                  Export
                </Button>
              }
              className="h-[348px]"
            >
              <div className="mt-7 grid grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <StatCard key={stat.label} stat={stat} />
                ))}
              </div>
            </Panel>

            <Panel title="Visitor Insights" className="h-[348px]">
              <VisitorInsightsChart />
            </Panel>
          </div>

          <div className="mt-8 grid grid-cols-[minmax(0,1fr)_420px_371px] gap-8">
            <Panel title="Total Revenue" className="h-[351px]">
              <RevenueBarChart />
            </Panel>

            <Panel title="Customer Satisfaction" className="h-[351px]">
              <CustomerSatisfactionChart />
            </Panel>

            <Panel title="Target vs Reality" className="h-[351px]">
              <TargetRealityChart />
            </Panel>
          </div>

          <div className="mt-8 grid grid-cols-[minmax(0,1fr)_421px_371px] gap-8">
            <Panel title="Top Products" className="h-[351px]">
              <div className="mt-6 overflow-hidden rounded-xl ring-1 ring-[var(--color-border)]">
                <div className="grid grid-cols-[64px_minmax(0,1fr)_220px_96px] bg-white px-5 py-3 text-xs text-[var(--color-muted)]">
                  <div>#</div>
                  <div>Name</div>
                  <div>Popularity</div>
                  <div className="text-right">Sales</div>
                </div>
                <div className="divide-y divide-[var(--color-border)] bg-white">
                  {topProducts.map((p) => (
                    <div
                      key={p.id}
                      className="grid grid-cols-[64px_minmax(0,1fr)_220px_96px] items-center px-5 py-4 text-sm"
                    >
                      <div className="text-[var(--color-muted)]">{p.id}</div>
                      <div className="truncate text-[var(--color-text)]">{p.name}</div>
                      <div className="pr-4">
                        <div className="h-1.5 w-full rounded-full bg-[#EEF0F4]">
                          <div
                            className="h-1.5 rounded-full bg-[var(--color-primary)]"
                            style={{ width: `${Math.round(p.popularity * 100)}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-right">
                        <span
                          className={cn(
                            'inline-flex min-w-[52px] items-center justify-center rounded-full px-2 py-1 text-xs font-semibold',
                            salesBadge(p.salesTone)
                          )}
                        >
                          {p.sales}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Panel>

            <Panel title="Sales Mapping by Country" className="h-[351px]">
              <div className="mt-6 grid place-items-center">
                <img
                  src="./assets/images/world-map.svg"
                  alt="World map with sales highlights"
                  className="h-auto w-full max-w-[360px]"
                  loading="lazy"
                />
              </div>
            </Panel>

            <Panel title="Volume vs Service Level" className="h-[351px]">
              <VolumeServiceChart />
            </Panel>
          </div>
        </main>
      </div>
    </div>
  )
}
