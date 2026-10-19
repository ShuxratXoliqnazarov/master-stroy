import { useState } from 'react'
import { CONTACTS } from '@/shared/config'
import { telHref } from '@/shared/lib'
import { ChevronIcon, ClockIcon, MailIcon, PhoneIcon, PinIcon } from '@/shared/ui'

const COLUMNS = [
  {
    title: 'Каталог',
    links: [
      { label: 'Акции', href: '#top-products' },
      { label: 'Тротуарная плитка', href: '#catalog' },
      { label: 'Бордюры', href: '#catalog' },
    ],
  },
  {
    title: 'Сервисы',
    links: [
      { label: 'Дизайн-проект', href: '#works' },
      { label: 'Укладка брусчатки', href: '#advantages' },
      { label: 'Доставка', href: '#delivery' },
    ],
  },
  {
    title: 'О компании',
    links: [
      { label: 'Контакты', href: '#contacts' },
      { label: 'Производство', href: '#production' },
      { label: 'Портфолио', href: '#works' },
    ],
  },
]

function FooterColumn({ title, links }) {
  const [open, setOpen] = useState(false)
  const id = `footer-${title}`

  return (
    <div className="border-b border-black/10 sm:border-0">
      {/* на мобильных — аккордеон, от sm — обычный заголовок */}
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-center justify-between py-4 text-xl font-bold text-accent sm:pointer-events-none sm:py-0"
        >
          {title}
          <ChevronIcon className={`h-5 w-5 transition-transform sm:hidden ${open ? '-rotate-90' : 'rotate-90'}`} />
        </button>
      </h3>
      <ul id={id} className={`space-y-3 pb-4 text-[13px] sm:mt-6 sm:block sm:pb-0 ${open ? 'block' : 'hidden'}`}>
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="transition-colors hover:text-accent">{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-white pt-14 pb-8 md:pt-16">
      <div className="container-site">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <h2 className="text-xl font-bold text-accent">Магазин</h2>
            <ul className="mt-6 space-y-4 text-[13px]">
              <li className="flex gap-4">
                <ClockIcon className="h-6 w-6 shrink-0" />
                <span className="pt-0.5">Режим работы: {CONTACTS.hours}</span>
              </li>
              <li className="flex gap-4">
                <PhoneIcon className="h-5 w-5 shrink-0" />
                <div className="flex flex-col gap-1">
                  {CONTACTS.phones.map((p) => (
                    <a key={p} href={telHref(p)} className="hover:text-accent">{p}</a>
                  ))}
                </div>
              </li>
              <li className="flex gap-4">
                <MailIcon className="h-5 w-5 shrink-0" />
                <a href={`mailto:${CONTACTS.email}`} className="hover:text-accent">{CONTACTS.email}</a>
              </li>
              <li className="flex gap-4">
                <PinIcon className="h-5 w-5 shrink-0" />
                <span>{CONTACTS.address}</span>
              </li>
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-[clamp(40px,6vw,90px)]">
            {COLUMNS.map((col) => (
              <FooterColumn key={col.title} {...col} />
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-[13px]">© {new Date().getFullYear()} ООО &quot;Мастер строй&quot;</p>
      </div>
    </footer>
  )
}
