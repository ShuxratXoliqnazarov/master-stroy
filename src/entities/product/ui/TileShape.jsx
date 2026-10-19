/** Изометричная иллюстрация плитки; цвет меняется через проп color. */
const shapes = {
  hexagon: {
    top: 'M50 70 L90 35 L170 35 L210 70 L170 105 L90 105Z',
    side: 'M50 70 L90 105 L170 105 L210 70 L210 98 L170 133 L90 133 L50 98Z',
  },
  square: {
    top: 'M40 70 L130 40 L215 70 L125 100Z',
    side: 'M40 70 L125 100 L215 70 L215 98 L125 128 L40 98Z',
  },
  block: {
    top: 'M60 50 L130 30 L200 75 L130 95Z',
    side: 'M60 50 L130 95 L200 75 L200 120 L130 140 L60 95Z',
  },
  coil: {
    top: 'M50 60 L105 42 L118 50 L142 42 L130 34 L170 22 L215 50 L160 68 L148 60 L124 68 L136 76 L95 90Z',
    side: 'M50 60 L95 90 L136 76 L136 104 L95 118 L50 88Z M160 68 L215 50 L215 78 L160 96Z',
  },
  wave: {
    top: 'M45 66 C70 40 90 64 112 46 C134 28 150 54 172 34 L215 56 C192 76 176 52 154 70 C132 88 116 64 94 82 C78 96 64 82 45 66Z',
    side: 'M45 66 C64 82 78 96 94 82 C116 64 132 88 154 70 C176 52 192 76 215 56 L215 84 C192 104 176 80 154 98 C132 116 116 92 94 110 C78 124 64 110 45 94Z',
  },
}

const fillStyle = (color) => ({ fill: color, transition: 'fill .3s' })

export function TileShape({ shape, color, secondColor }) {
  if (shape === 'brick') {
    // брусчатка — два камня рядом (выбранный цвет + графит)
    return (
      <svg viewBox="0 0 260 160" className="h-full w-full" aria-hidden="true">
        <ellipse cx="130" cy="146" rx="100" ry="9" fill="#000" opacity=".08" />
        <g style={fillStyle(color)}>
          <path d="M25 95 L120 70 L150 82 L55 108Z" />
          <path d="M25 95 L55 108 L55 140 L25 127Z" />
          <path d="M55 108 L150 82 L150 114 L55 140Z" />
        </g>
        <path d="M25 95 L55 108 L55 140 L25 127Z" fill="#000" opacity=".15" />
        <path d="M55 108 L150 82 L150 114 L55 140Z" fill="#000" opacity=".3" />
        <g style={fillStyle(secondColor)}>
          <path d="M120 40 L160 22 L235 70 L195 88Z" />
          <path d="M120 40 L195 88 L195 128 L120 80Z" />
          <path d="M195 88 L235 70 L235 110 L195 128Z" />
        </g>
        <path d="M120 40 L195 88 L195 128 L120 80Z" fill="#000" opacity=".2" />
        <path d="M195 88 L235 70 L235 110 L195 128Z" fill="#000" opacity=".38" />
      </svg>
    )
  }

  const s = shapes[shape] ?? shapes.square
  return (
    <svg viewBox="0 0 260 160" className="h-full w-full" aria-hidden="true">
      <defs>
        <pattern id="tile-grain" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r=".7" fill="#fff" />
          <circle cx="4" cy="4" r=".6" fill="#000" />
        </pattern>
      </defs>
      <ellipse cx="130" cy="146" rx="100" ry="9" fill="#000" opacity=".08" />
      <g style={fillStyle(color)}>
        <path d={s.top} />
        <path d={s.side} />
      </g>
      <path d={s.side} fill="#000" opacity=".28" />
      <path d={s.top} fill="url(#tile-grain)" opacity=".35" />
    </svg>
  )
}
