import Icon from '../ui/Icon'

export default function TopBar() {
  return (
    <header className="h-[120px] bg-white">
      <div className="mx-auto flex h-full w-full max-w-[1575px] items-center gap-10 px-8">
        <div className="text-4xl font-semibold leading-[50px] text-[var(--color-text)]">
          Dashboard
        </div>

        <div className="flex h-[60px] w-[513px] flex-1 items-center gap-2 rounded-2xl bg-[var(--color-input)] px-6">
          <Icon src="./assets/icons/search.svg" alt="" className="h-8 w-8" />
          <input
            className="h-full w-full bg-transparent text-[18px] text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none"
            placeholder="Search here..."
            aria-label="Search"
          />
        </div>

        <div className="ml-auto flex items-center gap-6">
          <button
            type="button"
            className="flex h-[60px] items-center gap-3 rounded-2xl px-4 text-[15px] font-medium text-[var(--color-text)] hover:bg-[var(--color-input)]"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E8F0FF] text-[11px]">
              US
            </span>
            <span className="text-[16px] font-medium text-[var(--color-text)]">Eng (US)</span>
            <Icon src="./assets/icons/chevron-down.svg" alt="" className="h-5 w-5 opacity-80" />
          </button>

          <button
            type="button"
            className="relative grid h-12 w-12 place-items-center rounded-lg bg-[var(--color-warn-bg)]"
            aria-label="Notifications"
          >
            <Icon src="./assets/icons/bell.svg" alt="" className="h-6 w-6" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[var(--color-danger)]" />
          </button>

          <button
            type="button"
            className="flex items-center gap-4 rounded-2xl px-2 py-2 hover:bg-[var(--color-input)]"
          >
            <div
              className="grid h-[60px] w-[60px] place-items-center rounded-2xl bg-[linear-gradient(135deg,#F59E0B,#EF4444)] text-lg font-semibold text-white"
              aria-hidden="true"
            >
              M
            </div>
            <div className="text-left">
              <div className="text-[16px] font-medium leading-6 text-[var(--color-text)]">
                Musfiq
              </div>
              <div className="text-[14px] leading-5 text-[var(--color-muted)]">Admin</div>
            </div>
            <Icon src="./assets/icons/chevron-down.svg" alt="" className="h-5 w-5 opacity-80" />
          </button>
        </div>
      </div>
    </header>
  )
}
