import { getPriceRow, PRICE_ROWS, TILE_COLORS } from '../model/colors'
import { TileShape } from './TileShape'

/**
 * Карточка товара (только отображение).
 * colorSelect — слот для выбора цвета, action — слот для кнопки в углу тёмной панели.
 */
export function ProductCard({ product, color, colorSelect, action }) {
  const activeRow = getPriceRow(color)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[30px] bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:flex-row">
      <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
        <div className="mx-auto aspect-[260/160] w-full max-w-[290px]">
          <TileShape shape={product.shape} color={color.hex} secondColor="#3a3d42" />
        </div>
        <h3 className="mt-4 text-[15px] font-bold">{product.title}</h3>
        <dl className="mt-3 space-y-1 text-[15px] text-ink/90">
          <div><dt className="inline">Размер: </dt><dd className="inline">{product.size}</dd></div>
          <div><dt className="inline">Количество: </dt><dd className="inline">{product.amount}</dd></div>
          <div><dt className="inline">Цвета в наличии: </dt><dd className="inline">{TILE_COLORS.length}</dd></div>
        </dl>
        {colorSelect && <div className="mt-3">{colorSelect}</div>}
      </div>

      <div className="relative bg-graphite px-6 pt-6 pb-20 text-white sm:w-[180px] sm:shrink-0 sm:pb-16">
        <ul className="grid grid-cols-2 gap-4 text-xs sm:grid-cols-1">
          {PRICE_ROWS.map((row) => (
            <li key={row.id} className={`transition-colors ${activeRow === row.id ? 'text-accent' : ''}`}>
              <p className="font-bold">{row.label}</p>
              <p className={`mt-0.5 ${activeRow === row.id ? '' : 'text-white/85'}`}>{product.prices[row.id]}</p>
            </li>
          ))}
        </ul>
        {action && <div className="absolute right-0 bottom-0">{action}</div>}
      </div>
    </article>
  )
}

export function ProductCardSkeleton() {
  return <div className="h-[349px] animate-pulse rounded-[30px] bg-black/5" />
}
