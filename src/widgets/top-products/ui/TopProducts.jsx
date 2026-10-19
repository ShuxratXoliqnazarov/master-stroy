import { fetchProducts, ProductCardSkeleton } from '@/entities/product'
import { useFetch } from '@/shared/lib'
import { Reveal } from '@/shared/ui'
import { TopProductItem } from './TopProductItem'

export function TopProducts() {
  const { data, loading, error } = useFetch(fetchProducts)

  return (
    <section id="top-products" className="py-16 md:py-24 lg:py-[120px]">
      <div className="container-site">
        <Reveal as="h2" className="section-title">Топ товаров</Reveal>

        {error && (
          <p className="mt-10 text-center text-black/60">Не удалось загрузить товары. Попробуйте обновить страницу.</p>
        )}

        <div className="mx-auto mt-10 grid max-w-[640px] gap-6 md:mt-14 lg:mt-[82px] lg:max-w-none lg:grid-cols-2 lg:gap-x-[30px] lg:gap-y-[17px]">
          {loading && Array.from({ length: 6 }, (_, i) => <ProductCardSkeleton key={i} />)}
          {data?.map((product, i) => (
            <Reveal key={product.id} delay={(i % 2) * 100}>
              <TopProductItem product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
