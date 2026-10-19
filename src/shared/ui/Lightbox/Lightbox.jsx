import { useEffect, useRef } from 'react'
import { useLockScroll } from '@/shared/lib'
import { ChevronIcon, CloseIcon } from '../icons'

export function Lightbox({ images, index, onClose, onChange }) {
  const open = index !== null
  const touchX = useRef(null)
  const closeRef = useRef(null)
  useLockScroll(open)

  const step = (dir) => onChange((index + dir + images.length) % images.length)

  useEffect(() => {
    if (open) closeRef.current?.focus()
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (!open) return null
  const img = images[index]

  const navBtn =
    'absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-accent'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Просмотр фото"
      className="fixed inset-0 z-[60] flex animate-fade-in items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
        touchX.current = null
      }}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full text-white hover:bg-white/15"
        aria-label="Закрыть"
      >
        <CloseIcon className="h-7 w-7" />
      </button>

      <button
        type="button"
        className={`${navBtn} left-3 md:left-8`}
        onClick={(e) => {
          e.stopPropagation()
          step(-1)
        }}
        aria-label="Предыдущее фото"
      >
        <ChevronIcon className="h-6 w-6 rotate-180" />
      </button>

      <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img key={img.src} src={img.src} alt={img.alt} className="max-h-[80vh] w-full animate-fade-in rounded-[20px] object-contain" />
        <figcaption className="mt-3 text-center text-sm text-white/80">
          {img.alt} · {index + 1} / {images.length}
        </figcaption>
      </figure>

      <button
        type="button"
        className={`${navBtn} right-3 md:right-8`}
        onClick={(e) => {
          e.stopPropagation()
          step(1)
        }}
        aria-label="Следующее фото"
      >
        <ChevronIcon className="h-6 w-6" />
      </button>
    </div>
  )
}
