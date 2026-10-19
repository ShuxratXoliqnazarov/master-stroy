import { Reveal } from '@/shared/ui'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[460px] items-center bg-[#2a2a2a] bg-cover bg-center text-white md:min-h-[532px]"
      style={{ backgroundImage: 'url(/img/hero-bg.svg)' }}
    >
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
      <Reveal className="container-site relative py-16 text-center">
        <h1 className="mx-auto max-w-[900px] text-[26px] font-bold leading-[1.2] sm:text-[34px] lg:text-[42px]">
          Тротуарная плитка в Волоколамске напрямую от производителя
        </h1>
        <p className="mx-auto mt-6 max-w-[730px] text-sm font-medium leading-snug md:mt-8 md:text-[15px]">
          Вам нужна качественная и недорогая тротуарная плитка в Волоколамске? Мы готовы предложить отличную
          возможность приобрести современные модели с высокими показателями эстетики и механической стойкости
          напрямую от производителя – компании «Мастер Строй».
        </p>
        <a href="#catalog" className="btn-accent mt-8">Каталог</a>
      </Reveal>
    </section>
  )
}
