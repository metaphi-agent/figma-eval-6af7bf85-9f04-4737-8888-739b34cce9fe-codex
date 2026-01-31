import * as React from 'react'
import { Sidebar } from '../components/layout/Sidebar'
import { TopBar } from '../components/layout/TopBar'
import { Card, CardBody, CardHeader } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { LineChart } from '../components/charts/LineChart'
import { GroupedBarChart } from '../components/charts/GroupedBarChart'
import { StackedBarChart } from '../components/charts/StackedBarChart'
import { cn } from '../lib/cn'

type Metric = {
  label: string
  value: string
  delta: string
  bg: string
  iconBg: string
  icon: React.ReactNode
}

function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div
      className={cn(
        'rounded-2xl p-5',
        metric.bg
      )}
    >
      <div
        className={cn(
          'grid size-10 place-items-center rounded-full text-white',
          metric.iconBg
        )}
        aria-hidden="true"
      >
        {metric.icon}
      </div>
      <div className="mt-4 text-2xl font-semibold text-[color:var(--color-text)]">
        {metric.value}
      </div>
      <div className="mt-1 text-base font-medium text-[color:var(--color-muted)]">
        {metric.label}
      </div>
      <div className="mt-2 text-xs font-medium text-[color:var(--color-primary)]">
        {metric.delta}
      </div>
    </div>
  )
}

function ExportIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
      <path
        d="M12 3v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 7l4-4 4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 14v5h16v-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function DashboardPage() {
  const [activeNav, setActiveNav] = React.useState('dashboard')

  const todayMetrics: Metric[] = [
    {
      label: 'Total Sales',
      value: '$1k',
      delta: '+8% from yesterday',
      bg: 'bg-[#ffe2e5]',
      iconBg: 'bg-[#fa5a7d]',
      icon: (
        <svg viewBox="0 0 24 24" className="size-5" fill="none">
          <path
            d="M6 18V8M12 18V6M18 18v-4"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: 'Total Order',
      value: '300',
      delta: '+5% from yesterday',
      bg: 'bg-[#fff4de]',
      iconBg: 'bg-[#ff947a]',
      icon: (
        <svg viewBox="0 0 24 24" className="size-5" fill="none">
          <path
            d="M7 7h14l-1.2 7.2a2 2 0 0 1-2 1.7H9.1a2 2 0 0 1-2-1.6L5.5 4.5H3"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: 'Product Sold',
      value: '5',
      delta: '+1,2% from yesterday',
      bg: 'bg-[#dcfce7]',
      iconBg: 'bg-[#3cd856]',
      icon: (
        <svg viewBox="0 0 24 24" className="size-5" fill="none">
          <path
            d="M12 3v10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 9l4 4 4-4"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 19h16"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: 'New Customers',
      value: '8',
      delta: '0,5% from yesterday',
      bg: 'bg-[#f3e8ff]',
      iconBg: 'bg-[#bf83ff]',
      icon: (
        <svg viewBox="0 0 24 24" className="size-5" fill="none">
          <path
            d="M16 11a4 4 0 1 0-8 0"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6 21a6 6 0 0 1 12 0"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <div className="flex min-h-screen">
        <div className="hidden lg:block">
          <Sidebar activeId={activeNav} onSelect={setActiveNav} />
        </div>

        <main className="min-w-0 flex-1">
          <TopBar title="Dashboard" />

          <div className="px-10 py-8">
            <div className="grid grid-cols-12 gap-8">
              <Card className="col-span-12 xl:col-span-8">
                <CardHeader className="flex items-start justify-between">
                  <div>
                    <div className="text-[20px] font-semibold text-[color:var(--color-text)]">
                      Today’s Sales
                    </div>
                    <div className="mt-1 text-base text-[color:var(--color-muted)]">
                      Sales Summery
                    </div>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="h-10 rounded-lg px-4 text-[14px] text-[#0f3559]"
                  >
                    <ExportIcon />
                    Export
                  </Button>
                </CardHeader>
                <CardBody className="pt-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {todayMetrics.map((m) => (
                      <MetricCard key={m.label} metric={m} />
                    ))}
                  </div>
                </CardBody>
              </Card>

              <Card className="col-span-12 xl:col-span-4">
                <CardHeader>
                  <div className="text-[20px] font-semibold text-[color:var(--color-text)]">
                    Visitor Insights
                  </div>
                </CardHeader>
                <CardBody className="pt-2">
                  <LineChart
                    labels={[
                      'Jan',
                      'Feb',
                      'Mar',
                      'Apr',
                      'May',
                      'Jun',
                      'Jul',
                      'Aug',
                      'Sep',
                      'Oct',
                      'Nov',
                      'Dec',
                    ]}
                    emphasizeIndex={7}
                    series={[
                      {
                        name: 'Loyal Customers',
                        color: '#7c3aed',
                        values: [320, 260, 220, 250, 280, 310, 300, 260, 240, 220, 200, 180],
                      },
                      {
                        name: 'New Customers',
                        color: '#f65b60',
                        values: [260, 240, 200, 210, 270, 320, 340, 310, 290, 260, 220, 170],
                      },
                      {
                        name: 'Unique Customers',
                        color: '#22c55e',
                        values: [300, 320, 280, 240, 220, 260, 310, 330, 320, 280, 240, 210],
                      },
                    ]}
                    height={170}
                  />

                  <div className="mt-4 flex flex-wrap items-center justify-center gap-5 text-xs text-[color:var(--color-muted)]">
                    {[
                      { label: 'Loyal Customers', color: '#7c3aed' },
                      { label: 'New Customers', color: '#f65b60' },
                      { label: 'Unique Customers', color: '#22c55e' },
                    ].map((l) => (
                      <div key={l.label} className="flex items-center gap-2">
                        <span
                          className="size-2 rounded-sm"
                          style={{ backgroundColor: l.color }}
                        />
                        <span className="font-medium">{l.label}</span>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>

              <Card className="col-span-12 xl:col-span-6">
                <CardHeader>
                  <div className="text-[20px] font-semibold text-[color:var(--color-text)]">
                    Total Revenue
                  </div>
                </CardHeader>
                <CardBody className="pt-4">
                  <GroupedBarChart
                    labels={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
                    groups={[
                      { name: 'Online Sales', color: '#3b82f6', values: [14, 18, 7, 16, 12, 18, 22] },
                      { name: 'Offline Sales', color: '#22c55e', values: [13, 12, 22, 8, 12, 14, 11] },
                    ]}
                    height={210}
                  />
                  <div className="mt-4 flex items-center justify-center gap-8 text-xs text-[color:var(--color-muted)]">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#3b82f6]" />
                      <span className="font-medium">Online Sales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#22c55e]" />
                      <span className="font-medium">Offline Sales</span>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="col-span-12 md:col-span-6 xl:col-span-3">
                <CardHeader>
                  <div className="text-[20px] font-semibold text-[color:var(--color-text)]">
                    Customer Satisfaction
                  </div>
                </CardHeader>
                <CardBody className="pt-4">
                  <LineChart
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                    series={[
                      { name: 'Last Month', color: '#3b82f6', values: [40, 36, 30, 31, 32, 32, 35] },
                      { name: 'This Month', color: '#22c55e', values: [45, 42, 43, 41, 44, 39, 48] },
                    ]}
                    gradientFill={{ seriesIndex: 0, from: '#3b82f6', to: '#3b82f6' }}
                    height={170}
                  />

                  <div className="mt-5 grid grid-cols-2 gap-5 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="mt-1 size-2 rounded-full bg-[#3b82f6]" />
                      <div>
                        <div className="text-[color:var(--color-muted)]">Last Month</div>
                        <div className="font-semibold text-[color:var(--color-text)]">
                          $3,004
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-1 size-2 rounded-full bg-[#22c55e]" />
                      <div>
                        <div className="text-[color:var(--color-muted)]">This Month</div>
                        <div className="font-semibold text-[color:var(--color-text)]">
                          $4,504
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="col-span-12 md:col-span-6 xl:col-span-3">
                <CardHeader>
                  <div className="text-[20px] font-semibold text-[color:var(--color-text)]">
                    Target vs Reality
                  </div>
                </CardHeader>
                <CardBody className="pt-4">
                  <GroupedBarChart
                    labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July']}
                    groups={[
                      { name: 'Reality', color: '#22c55e', values: [10, 12, 14, 12, 18, 19, 18] },
                      { name: 'Target', color: '#facc15', values: [14, 16, 18, 15, 20, 22, 23] },
                    ]}
                    height={170}
                  />
                  <div className="mt-4 space-y-3 text-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="grid size-7 place-items-center rounded-lg bg-[#e8faf0] text-[#22c55e]">
                          <span className="text-[10px] font-bold">$</span>
                        </span>
                        <div>
                          <div className="font-semibold text-[color:var(--color-text)]">
                            Reality Sales
                          </div>
                          <div className="text-[color:var(--color-muted)]">Global</div>
                        </div>
                      </div>
                      <div className="font-semibold text-[#22c55e]">8.823</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="grid size-7 place-items-center rounded-lg bg-[#fff7da] text-[#f59e0b]">
                          <span className="text-[10px] font-bold">$</span>
                        </span>
                        <div>
                          <div className="font-semibold text-[color:var(--color-text)]">
                            Target Sales
                          </div>
                          <div className="text-[color:var(--color-muted)]">Commercial</div>
                        </div>
                      </div>
                      <div className="font-semibold text-[#f59e0b]">12.122</div>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="col-span-12 xl:col-span-6">
                <CardHeader>
                  <div className="text-[20px] font-semibold text-[color:var(--color-text)]">
                    Top Products
                  </div>
                </CardHeader>
                <CardBody className="pt-3">
                  <div className="grid grid-cols-[44px_1fr_1fr_90px] gap-4 border-b border-[color:var(--color-border)] pb-3 text-xs text-[color:var(--color-muted)]">
                    <div>#</div>
                    <div>Name</div>
                    <div>Popularity</div>
                    <div className="text-right">Sales</div>
                  </div>

                  {[
                    { id: '01', name: 'Home Decor Range', pct: 45, color: '#3b82f6' },
                    { id: '02', name: 'Disney Princess Pink Bag 18"', pct: 29, color: '#22c55e' },
                    { id: '03', name: 'Bathroom Essentials', pct: 18, color: '#7c3aed' },
                    { id: '04', name: 'Apple Smartwatches', pct: 25, color: '#f97316' },
                  ].map((row) => (
                    <div
                      key={row.id}
                      className="grid grid-cols-[44px_1fr_1fr_90px] items-center gap-4 py-4 text-sm"
                    >
                      <div className="text-[color:var(--color-muted)]">{row.id}</div>
                      <div className="text-[color:var(--color-text)]">{row.name}</div>
                      <div className="h-2 rounded-full bg-[color:var(--color-border)]">
                        <div
                          className="h-2 rounded-full"
                          style={{ width: `${row.pct}%`, backgroundColor: row.color }}
                        />
                      </div>
                      <div className="text-right">
                        <span
                          className="inline-flex h-6 items-center justify-center rounded-full px-3 text-xs font-semibold"
                          style={{
                            color: row.color,
                            backgroundColor: `${row.color}1a`,
                          }}
                        >
                          {row.pct}%
                        </span>
                      </div>
                    </div>
                  ))}
                </CardBody>
              </Card>

              <Card className="col-span-12 md:col-span-6 xl:col-span-3">
                <CardHeader>
                  <div className="text-[20px] font-semibold text-[color:var(--color-text)]">
                    Sales Mapping by Country
                  </div>
                </CardHeader>
                <CardBody className="pt-1">
                  <div className="mt-2">
                    <svg viewBox="0 0 360 170" className="h-auto w-full" role="img" aria-label="World map">
                      <path
                        d="M14 92c18-30 33-38 58-44 29-7 44 3 62 8 22 6 45 0 60-6 21-10 35-10 58-1 22 8 41 18 63 26 25 10 35 15 45 29-8 7-24 13-40 14-19 2-35-1-53-4-20-4-36-6-54-2-17 3-33 12-50 12-16 0-30-6-45-12-24-9-44-15-66-10-15 4-28 12-38 20-7-6-15-17-20-30Z"
                        fill="#e5e7eb"
                      />
                      <path d="M58 70c18-8 34-8 50 2 0 0-10 14-28 20-14 5-22 2-28-22Z" fill="#f59e0b" opacity="0.9" />
                      <path d="M230 60c24 1 42 12 60 24-9 13-24 18-41 17-16-1-22-5-19-41Z" fill="#7c3aed" opacity="0.85" />
                      <path d="M170 98c14-6 26-2 36 6-4 14-16 18-26 16-10-2-12-6-10-22Z" fill="#14b8a6" opacity="0.9" />
                      <path d="M112 104c18 0 30 8 40 18-10 12-24 14-36 10-14-5-16-10-4-28Z" fill="#ef4444" opacity="0.8" />
                      <path d="M150 80c8-6 16-6 24 0-1 10-7 16-12 16-6 0-10-4-12-16Z" fill="#3b82f6" opacity="0.75" />
                    </svg>
                  </div>
                </CardBody>
              </Card>

              <Card className="col-span-12 md:col-span-6 xl:col-span-3">
                <CardHeader>
                  <div className="text-[20px] font-semibold text-[color:var(--color-text)]">
                    Volume vs Service Level
                  </div>
                </CardHeader>
                <CardBody className="pt-4">
                  <StackedBarChart
                    labels={['', '', '', '', '', '']}
                    stacks={[
                      { name: 'Services', color: '#22c55e', values: [8, 6, 6, 5, 4, 6] },
                      { name: 'Volume', color: '#3b82f6', values: [10, 12, 10, 9, 7, 6] },
                    ]}
                    height={190}
                  />
                  <div className="mt-4 flex items-end justify-center gap-12 text-xs text-[color:var(--color-muted)]">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#3b82f6]" />
                      <div>
                        <div className="font-medium">Volume</div>
                        <div className="font-semibold text-[color:var(--color-text)]">
                          1,135
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#22c55e]" />
                      <div>
                        <div className="font-medium">Services</div>
                        <div className="font-semibold text-[color:var(--color-text)]">
                          635
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
