import { useState } from 'react'

/** Яндекс.Карта с меткой. До клика перекрыта, чтобы не перехватывать прокрутку страницы. */
export function YandexMap({ coords: [lon, lat], zoom = 13, title, className = '' }) {
  const [active, setActive] = useState(false)
  const src = `https://yandex.ru/map-widget/v1/?ll=${lon}%2C${lat}&z=${zoom}&pt=${lon}%2C${lat}%2Cpm2rdl&lang=ru_RU`

  return (
    <div className={`relative bg-black/5 ${className}`}>
      <iframe src={src} title={title} loading="lazy" className="h-full w-full border-0" allowFullScreen />
      {!active && (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 flex items-end justify-center pb-6"
          aria-label="Активировать карту"
        >
          <span className="rounded-full bg-graphite/85 px-5 py-2.5 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 max-lg:opacity-100">
            Нажмите, чтобы управлять картой
          </span>
        </button>
      )}
    </div>
  )
}
