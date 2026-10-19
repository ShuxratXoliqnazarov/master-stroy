/** Карточка раздела каталога. Действие по клику задаёт верхний слой. */
export function CategoryCard({ category, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex aspect-[240/264] w-full flex-col items-center justify-between rounded-[30px] bg-white px-3 pt-6 pb-5 text-center shadow-card transition duration-300 hover:-translate-y-2 hover:shadow-card-hover focus-visible:outline-3 focus-visible:outline-accent"
    >
      <img
        src={category.image}
        alt=""
        loading="lazy"
        className="h-[62%] w-full object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <span className="text-xs font-semibold group-hover:text-accent sm:text-sm">{category.title}</span>
    </button>
  )
}

export function CategoryCardSkeleton() {
  return <div className="aspect-[240/264] animate-pulse rounded-[30px] bg-black/5" />
}
