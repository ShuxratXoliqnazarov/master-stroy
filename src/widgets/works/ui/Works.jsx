import { useState } from 'react'
import Lightbox from './Lightbox'
import Reveal from './Reveal'

const WORKS = [
  'Дорожка из плитки «Волна» вдоль забора',
  'Площадка из брусчатки в три цвета',
  'Отмостка вокруг деревянного дома',
  'Площадка у дома, мозаичная укладка',
  'Садовая дорожка к беседке',
  'Дорожка с узором «3D-куб»',
  'Дорожка из кирпичика в саду',
  'Укладка плитки на подготовленное основание',
].map((alt, i) => ({ src: `/img/works/work-${i + 1}.svg`, alt }))

export default function Works() {
  const [active, setActive] = useState(null)

  return (
    <section id="works" className="py-16 md:py-24 lg:py-[120px]">
      <div className="container-site">
        <Reveal as="h2" className="section-title">Наши работы</Reveal>
        <Reveal as="p" className="mx-auto mt-8 max-w-[1040px] text-center text-[13px] leading-snug md:mt-12 lg:mt-[86px]">
          Отделка участка, сада, входной группы или любой другой частной территории требует большого внимания со
          стороны владельца, поскольку именно эти зоны являются «лицом», а значит и престижем вашего дома или
          коммерческого объекта. Подбор прочного и эстетически презентабельного материала для оформления входа,
          дорожек, пешеходных зон – это уже половина успеха отделки. Вторая половина – это, безусловно, грамотная
          укладка, обеспечивающая долговечность покрытия.
        </Reveal>

        {/* мобильные: горизонтальный слайдер со свайпом; от md — сетка 2/3 колонки, последний ряд по центру */}
        <ul className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:mt-14 md:flex-wrap md:justify-center md:gap-[30px] md:overflow-visible md:px-0 lg:mt-[86px] lg:gap-y-10">
          {WORKS.map((img, i) => (
            <Reveal
              as="li"
              key={img.src}
              delay={(i % 3) * 80}
              className="w-[82%] shrink-0 snap-center md:w-[calc((100%-30px)/2)] lg:w-[calc((100%-60px)/3)]"
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block aspect-[330/274] w-full overflow-hidden rounded-[30px] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label={`Открыть фото: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent p-5 text-left text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {img.alt}
                </span>
                <img
                  src="/img/logo.svg"
                  alt=""
                  className="pointer-events-none absolute top-1/2 left-1/2 w-[45%] -translate-x-1/2 -translate-y-1/2 opacity-25 brightness-150"
                />
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <Lightbox images={WORKS} index={active} onClose={() => setActive(null)} onChange={setActive} />
    </section>
  )
}
