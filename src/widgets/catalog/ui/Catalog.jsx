import { CategoryCard, CategoryCardSkeleton, fetchCategories } from '@/entities/category'
import { useCallbackRequest } from '@/features/callback-request'
import { useFetch } from '@/shared/lib'
import { Reveal } from '@/shared/ui'

export function Catalog() {
  const { data, loading, error } = useFetch(fetchCategories)
  const { openCallback } = useCallbackRequest()

  return (
    <section id="catalog" className="py-16 md:py-24 lg:py-[120px]">
      <div className="container-site">
        <Reveal as="h2" className="section-title">Каталог продукции</Reveal>

        {error && (
          <p className="mt-10 text-center text-black/60">Не удалось загрузить каталог. Попробуйте обновить страницу.</p>
        )}

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:mt-14 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] lg:gap-y-[62px]">
          {loading && Array.from({ length: 8 }, (_, i) => <li key={i}><CategoryCardSkeleton /></li>)}
          {data?.map((category, i) => (
            <Reveal as="li" key={category.id} delay={(i % 4) * 80}>
              <CategoryCard category={category} onClick={() => openCallback({ title: category.title })} />
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
