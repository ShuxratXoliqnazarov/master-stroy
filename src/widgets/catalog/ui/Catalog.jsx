import { fetchCatalog } from '../api/client'
import { useFetch } from '../hooks/useFetch'
import { useModal } from './ModalContext'
import Reveal from './Reveal'

export default function Catalog() {
  const { data, loading, error } = useFetch(fetchCatalog)
  const { openCallback } = useModal()

  return (
    <section id="catalog" className="py-16 md:py-24 lg:pt-[120px] lg:pb-[120px]">
      <div className="container-site">
        <Reveal as="h2" className="section-title">Каталог продукции</Reveal>

        {error && (
          <p className="mt-10 text-center text-black/60">Не удалось загрузить каталог. Попробуйте обновить страницу.</p>
        )}

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:mt-14 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] lg:gap-y-[62px]">
          {loading &&
            Array.from({ length: 8 }, (_, i) => (
              <li key={i} className="aspect-square animate-pulse rounded-[30px] bg-black/5" />
            ))}
          {data?.map((item, i) => (
            <Reveal as="li" key={item.id} delay={(i % 4) * 80}>
              <button
                type="button"
                onClick={() => openCallback({ title: item.title })}
                className="group flex aspect-[240/264] w-full flex-col items-center justify-between rounded-[30px] bg-white px-3 pt-6 pb-5 text-center shadow-card transition duration-300 hover:-translate-y-2 hover:shadow-card-hover focus-visible:outline-3 focus-visible:outline-accent"
              >
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="h-[62%] w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <span className="text-xs font-semibold sm:text-sm group-hover:text-accent">{item.title}</span>
              </button>
            </Reveal>
          ))}
        </ul>

        <div className="mt-12 text-center lg:mt-[72px]">
          <button type="button" onClick={() => openCallback()} className="btn-accent sm:w-[266px]">
            Больше товаров
          </button>
        </div>
      </div>
    </section>
  )
}
