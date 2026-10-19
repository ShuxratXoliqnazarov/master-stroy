import { useState } from 'react'
import { PlayIcon } from '@/shared/ui'

/** Превью с кнопкой Play; iframe YouTube подгружается только по клику. */
export function LazyVideo({ videoId, poster, title }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-md bg-black shadow-2xl">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Смотреть видео «${title}»`}
        >
          <img
            src={poster}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
          <PlayIcon className="absolute top-1/2 left-1/2 w-[68px] -translate-x-1/2 -translate-y-1/2 drop-shadow-lg transition-transform group-hover:scale-110 md:w-[84px]" />
        </button>
      )}
    </div>
  )
}
