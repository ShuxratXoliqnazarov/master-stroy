import { PlusIcon } from '@/shared/ui'
import { useCallbackRequest } from '../model/context'

/** Оранжевая кнопка «+» в углу карточки товара — открывает заявку на товар выбранного цвета. */
export function OrderProductButton({ product, color }) {
  const { openCallback } = useCallbackRequest()

  return (
    <button
      type="button"
      onClick={() => openCallback({ title: product.title, color: color.name })}
      className="flex h-14 w-[69px] items-center justify-center rounded-tl-[30px] rounded-br-[30px] bg-accent text-white transition-colors hover:bg-accent-dark focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-white"
      aria-label={`Заказать: ${product.title}, цвет ${color.name.toLowerCase()}`}
    >
      <PlusIcon className="h-7 w-7 transition-transform duration-300 group-hover:rotate-90" />
    </button>
  )
}
