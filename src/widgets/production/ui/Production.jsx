import { LazyVideo } from '@/features/play-video'
import { VIDEO_ID } from '@/shared/config'
import { AwardIcon, BricksIcon, CraneTruckIcon, Reveal } from '@/shared/ui'

const POINTS = [
  { Icon: CraneTruckIcon, text: 'Доставка и разгрузка плитки краном-манипулятором' },
  { Icon: BricksIcon, text: 'Множество видов тротуарной плитки различной формы и фактуры' },
  { Icon: AwardIcon, text: 'Весь товар сертифицирован! Официальная гарантия!' },
]

export function Production() {
  return (
    <section id="production" className="bg-graphite py-16 text-white md:py-24 lg:py-[120px]">
      <div className="container-site">
        <Reveal as="h2" className="section-title">О производстве</Reveal>

        <div className="mt-10 flex flex-col-reverse gap-10 md:mt-14 lg:mt-[86px] lg:flex-row lg:items-start lg:gap-[46px]">
          <Reveal className="lg:w-[320px] lg:shrink-0">
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
            <LazyVideo
              videoId={VIDEO_ID}
              poster="/img/video-poster.svg"
              title="История одного успеха — производство «Мастер Строй»"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
