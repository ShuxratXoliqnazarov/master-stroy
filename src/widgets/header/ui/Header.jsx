import { useEffect, useState } from 'react'
import { CONTACTS, NAV, telHref } from '../data/site'
import { useLockScroll } from '../hooks/useLockScroll'
import { PhoneIcon } from './icons'
import Logo from './Logo'
import { useModal } from './ModalContext'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)
  const { openCallback } = useModal()
  useLockScroll(open)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${stuck || open ? 'shadow-[0_4px_18px_rgb(0_0_0/0.1)]' : ''}`}
    >
      <div className="container-site flex h-[64px] items-center justify-between gap-6 lg:h-[79px]">
        <Logo className="h-[42px] lg:h-[46px]" />

        <nav aria-label="Основное меню" className="hidden lg:block">
          <ul className="flex items-center gap-[clamp(14px,2.6vw,50px)] text-xs font-bold whitespace-nowrap xl:text-[13px]">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative py-2 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:text-accent hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={telHref(CONTACTS.phones[0])}
            className="flex h-11 w-11 items-center justify-center rounded-full text-graphite hover:text-accent md:hidden"
            aria-label={`Позвонить ${CONTACTS.phones[0]}`}
          >
            <PhoneIcon className="h-6 w-6" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full hover:bg-black/5"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-0.5 w-6 bg-graphite transition-all duration-300 ${
                  open && i === 0 ? 'translate-y-2 rotate-45' : ''
                } ${open && i === 1 ? 'opacity-0' : ''} ${open && i === 2 ? '-translate-y-2 -rotate-45' : ''}`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* мобильное меню */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full h-[calc(100dvh-64px)] overflow-y-auto bg-white transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav aria-label="Мобильное меню" className="container-site border-t border-black/10 py-6">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={close}
                  className="block border-b border-black/5 py-4 text-lg font-semibold hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-2 text-[15px]">
            {CONTACTS.phones.map((p) => (
              <a key={p} href={telHref(p)} className="font-medium hover:text-accent">{p}</a>
            ))}
            <p className="mt-2 text-black/60">{CONTACTS.address}</p>
            <p className="text-black/60">Режим работы: {CONTACTS.hours}</p>
          </div>
          <button
            type="button"
            className="btn-accent mt-6"
            onClick={() => {
              close()
              openCallback()
            }}
          >
            Заказать звонок
          </button>
        </nav>
      </div>
    </header>
  )
}
