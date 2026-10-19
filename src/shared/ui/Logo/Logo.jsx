export function Logo({ className = '' }) {
  return (
    <a href="#top" className={`inline-block shrink-0 ${className}`} aria-label="Мастер Строй — на главную">
      <img src="/img/logo.svg" alt="Мастер Строй" width="150" height="56" className="h-full w-auto" />
    </a>
  )
}
