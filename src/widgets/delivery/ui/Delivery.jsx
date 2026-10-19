import { useState } from 'react'
import { CONTACTS, telHref } from '../data/site'
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from './icons'
import { useModal } from './ModalContext'
import Reveal from './Reveal'

const [lon, lat] = CONTACTS.coords
const MAP_SRC = `https://yandex.ru/map-widget/v1/?ll=${lon}%2C${lat}&z=13&pt=${lon}%2C${lat}%2Cpm2rdl&lang=ru_RU`

export default function Delivery() {
  const { openCallback } = useModal()
  const [mapActive, setMapActive] = useState(false)

  return (
    <section id="delivery" className="py-16 md:py-24 lg:py-[120px]">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-[30px]">
          <Reveal className="flex flex-col gap-6 lg:gap-[30px]">
            <div className="rounded-[30px] bg-accent px-7 py-10 text-white md:px-10 md:py-12">
              <h2 className="text-[22px] leading-tight font-bold md:text-[28px]">
                Компания «Мастер Строй» осуществляет доставку
              </h2>
              <p className="mt-5 text-sm leading-snug text-white/90">
                Доставляем плитку, бордюры и блоки собственной спецтехникой с краном-манипулятором по Волоколамскому,
                Лотошинскому, Шаховскому району, Истре, Клину и Рузе. Разгрузим поддоны там, где вам удобно.
              </p>
              <button
                type="button"
                onClick={() => openCallback({ title: 'Расчёт доставки' })}
                className="btn mt-8 w-full bg-white text-ink hover:bg-graphite hover:text-white sm:w-auto"
              >
                Рассчитать доставку
              </button>
            </div>
            <img
              src="/img/delivery-truck.svg"
              alt="Грузовик с поддонами тротуарной плитки"
              loading="lazy"
              className="aspect-[16/10] w-full flex-1 rounded-[30px] object-cover"
            />
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-6 lg:gap-[30px]">
            <img
              src="/img/delivery-tile.svg"
              alt="Уложенная тротуарная плитка"
              loading="lazy"
              className="aspect-[16/10] w-full flex-1 rounded-[30px] object-cover"
            />
            <address id="contacts" className="scroll-mt-24 rounded-[30px] bg-graphite px-7 py-10 text-white not-italic md:px-10 md:py-12">
              <h2 className="text-[22px] font-bold md:text-[28px]">Отдел продаж</h2>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-4">
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div className="flex flex-col gap-1">
                    {CONTACTS.phones.map((p) => (
                      <a key={p} href={telHref(p)} className="hover:text-accent">{p}</a>
                    ))}
                  </div>
                </li>
                <li className="flex gap-4">
                  <MailIcon className="h-5 w-5 shrink-0 text-accent" />
                  <a href={`mailto:${CONTACTS.email}`} className="hover:text-accent">{CONTACTS.email}</a>
                </li>
                <li className="flex gap-4">
                  <ClockIcon className="h-5 w-5 shrink-0 text-accent" />
                  <span>Режим работы: {CONTACTS.hours}</span>
                </li>
                <li className="flex gap-4">
                  <PinIcon className="h-5 w-5 shrink-0 text-accent" />
                  <span>Производство: {CONTACTS.address}</span>
                </li>
              </ul>
            </address>
          </Reveal>
        </div>
      </div>

      <Reveal className="relative mt-10 h-[320px] w-full bg-black/5 md:mt-14 md:h-[420px] lg:mt-[82px] lg:h-[480px]">
        <iframe
          src={MAP_SRC}
          title="Производство «Мастер Строй» на Яндекс.Картах"
          loading="lazy"
          className="h-full w-full border-0"
          allowFullScreen
        />
        {!mapActive && (
          // перехватываем колесо/свайп, чтобы карта не мешала прокрутке страницы
          <button
            type="button"
            onClick={() => setMapActive(true)}
            className="group absolute inset-0 flex items-end justify-center pb-6"
            aria-label="Активировать карту"
          >
            <span className="rounded-full bg-graphite/85 px-5 py-2.5 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 max-lg:opacity-100">
              Нажмите, чтобы управлять картой
            </span>
          </button>
        )}
      </Reveal>
    </section>
  )
}
