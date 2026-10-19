import { useState } from 'react'
import { getDefaultColor, ProductCard } from '@/entities/product'
import { OrderProductButton } from '@/features/callback-request'
import { ColorSwatches } from '@/features/select-tile-color'

/** Карточка товара в сборе: сущность + фичи выбора цвета и заказа. */
export function TopProductItem({ product }) {
  const [color, setColor] = useState(() => getDefaultColor(product))

  return (
    <ProductCard
      product={product}
      color={color}
      colorSelect={<ColorSwatches value={color} onChange={setColor} />}
      action={<OrderProductButton product={product} color={color} />}
    />
  )
}
