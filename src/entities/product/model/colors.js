/** Цвета плитки. price — какая строка прайса относится к цвету (по умолчанию id). */
export const TILE_COLORS = [
  { id: 'gray', name: 'Серый', hex: '#7a7a7a' },
  { id: 'red', name: 'Красный', hex: '#a30d0d' },
  { id: 'yellow', name: 'Желтый', hex: '#d9963a' },
  { id: 'brown', name: 'Коричневый', hex: '#994a05' },
  { id: 'crimson', name: 'Малиновый', hex: '#e0143c', price: 'other' },
  { id: 'graphite', name: 'Графит', hex: '#4a4440', price: 'other' },
  { id: 'orange', name: 'Оранжевый', hex: '#dd8030', price: 'other' },
  { id: 'black', name: 'Черный', hex: '#151515', price: 'other' },
]

export const PRICE_ROWS = [
  { id: 'gray', label: 'Серый' },
  { id: 'red', label: 'Красный' },
  { id: 'brown', label: 'Коричневый' },
  { id: 'yellow', label: 'Желтый' },
  { id: 'other', label: 'Другие цвета' },
]

export const getPriceRow = (color) => color.price ?? color.id

/** Цвет, в котором товар показывается по умолчанию. */
export const getDefaultColor = (product) => (product.shape === 'wave' ? TILE_COLORS[1] : TILE_COLORS[0])
