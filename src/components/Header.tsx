import { Link } from '@tanstack/react-router'
import ParaglideLocaleSwitcher from './LocaleSwitcher.tsx'
import BetterAuthHeader from '../integrations/better-auth/header-user.tsx'
import ThemeToggle from './ThemeToggle'
import { m } from '#/paraglide/messages'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--line) bg-(--header-bg) px-4 backdrop-blur-lg">
      <nav className="page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4">
        <h2 className="m-0 shrink-0 text-base font-semibold tracking-tight">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm sm:px-4 sm:py-2"
          >
            Sober, Still Stupid
          </Link>
        </h2>

        <div className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-none sm:w-auto sm:flex-nowrap sm:pb-0">
          <Link
            to="/"
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
          >
            {m.home()}
          </Link>
          <Link
            to="/episodes"
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
          >
            Episodes
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
          >
            About
          </Link>
          <Link
            to="/blog"
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
          >
            {m.blog()}
          </Link>
          <a
            href="https://www.youtube.com/@SoberStillStupid"
            target='_blank'
            className="nav-link"
          >
            <span className='text-red-700'>Youtube</span>
          </a>
          
          <details className="relative w-full sm:w-auto">
            <summary className="nav-link list-none cursor-pointer">
              Demos
            </summary>
            <div className="mt-2 min-w-56 rounded-xl border border-[var(--line)] bg-[var(--header-bg)] p-2 shadow-lg sm:absolute sm:right-0">
              <a
                href="/demo/i18n"
                className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
              >
                I18n example
              </a>
              <a
                href="/demo/prisma"
                className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
              >
                Prisma
              </a>
              <a
                href="/auth"
                className="block rounded-lg px-3 py-2 text-sm text-[var(--sea-ink-soft)] no-underline transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
              >
                Better Auth
              </a>
            </div>
          </details>
        </div>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
         
          <ParaglideLocaleSwitcher />
          <BetterAuthHeader />

          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
