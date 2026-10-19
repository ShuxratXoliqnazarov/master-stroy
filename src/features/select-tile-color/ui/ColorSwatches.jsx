import { TILE_COLORS } from '@/entities/product'

/** Квадратики-образцы цвета плитки (radiogroup). */
export function ColorSwatches({ value, onChange }) {
  return (
    <div className="flex flex-wrap gap-[10px]" role="radiogroup" aria-label="Цвет плитки">
      {TILE_COLORS.map((c) => (
        <button
          key={c.id}
          type="button"
          role="radio"
          aria-checked={c.id === value.id}
          aria-label={c.name}
          title={c.name}
          onClick={() => onChange(c)}
          className={`h-[15px] w-[15px] transition-transform hover:scale-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
            c.id === value.id ? 'scale-125 ring-2 ring-accent ring-offset-2' : ''
          }`}
          style={{ backgroundColor: c.hex }}
        />
      ))}
    </div>
  )
}
