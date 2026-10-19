import { useState } from 'react'
import { VIDEO_ID } from '../data/site'
import { AwardIcon, BricksIcon, CraneTruckIcon, PlayIcon } from './icons'
import Reveal from './Reveal'

const POINTS = [
  { Icon: CraneTruckIcon, text: 'Доставка и разгрузка плитки краном-манипулятором' },
  { Icon: BricksIcon, text: 'Множество видов тротуарной плитки различной формы и фактуры' },
  { Icon: AwardIcon, text: 'Весь товар сертифицирован! Официальная гарантия!' },
]

export default function Production() {
  const [playing, setPlaying] = useState(false)

  return (
    <section id="production" className="bg-graphite py-16 text-white md:py-24 lg:py-[120px]">
      <div className="container-site">
        <Reveal as="h2" className="section-title">О производстве</Reveal>

        <div className="mt-10 flex flex-col-reverse gap-10 md:mt-14 lg:mt-[86px] lg:flex-row lg:items-start lg:gap-[46px]">
          <Reveal className="lg:w-[320px] lg:shrink-0 lg:pt-0">
            <div className="hidden h-[74px] w-[231px] items-center justify-center rounded-full bg-white lg:flex">
              <img src="/img/logo.svg" alt="Мастер Строй" className="h-[54px] w-auto" />
            </div>
            <ul className="grid gap-8 sm:grid-cols-3 lg:mt-14 lg:grid-cols-1 lg:gap-10">
              {POINTS.map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-7">
                  <Icon className="h-12 w-[62px] shrink-0" />
                  <p className="text-sm leading-snug">{text}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="w-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-md bg-black shadow-2xl">
              {playing ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                  title="История одного успеха — производство «Мастер Строй»"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="group absolute inset-0 h-full w-full"
                  aria-label="Смотреть видео «История одного успеха»"
                >
                  <img
                    src="/img/video-poster.svg"
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
                  <PlayIcon className="absolute top-1/2 left-1/2 w-[68px] -translate-x-1/2 -translate-y-1/2 drop-shadow-lg transition-transform group-hover:scale-110 md:w-[84px]" />
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
