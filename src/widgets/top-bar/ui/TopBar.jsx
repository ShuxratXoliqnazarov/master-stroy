import { useCallbackRequest } from '@/features/callback-request'
import { CONTACTS } from '@/shared/config'
import { telHref } from '@/shared/lib'
import { ClockIcon, PhoneIcon, PinIcon } from '@/shared/ui'

const divider = <span className="hidden h-11 w-px bg-white/30 lg:block" aria-hidden="true" />

export function TopBar() {
  const { openCallback } = useCallbackRequest()
  const [p1, p2, p3] = CONTACTS.phones

  return (
    <div className="hidden bg-graphite text-white md:block">
      <div className="container-site flex h-[79px] items-center justify-between gap-5 text-xs leading-snug whitespace-nowrap">
        <div className="hidden items-center gap-3 lg:flex">
          <PinIcon className="h-7 w-7 shrink-0" />
          <p>Волоколамский район,<br />пос. Чисмена, ул. Центральная, 1</p>
        </div>
        {divider}
        <div className="hidden items-center gap-3 lg:flex">
          <ClockIcon className="h-7 w-7 shrink-0" />
          <p>Режим работы:<br />{CONTACTS.hours}</p>
        </div>
        {divider}
        <div className="flex items-center gap-4">
          <PhoneIcon className="h-5 w-5 shrink-0" />
          <div className="flex flex-col">
            <a href={telHref(p1)} className="hover:text-accent">{p1}</a>
            <a href={telHref(p2)} className="hidden hover:text-accent lg:inline">{p2}</a>
          </div>
          <a href={telHref(p3)} className="hidden hover:text-accent lg:inline">{p3}</a>
        </div>
        <button
          type="button"
          onClick={() => openCallback()}
          className="btn h-[50px] w-[220px] shrink-0 bg-white text-base text-ink hover:bg-accent hover:text-white xl:w-[240px]"
        >
          Заказать звонок
        </button>
      </div>
    </div>
  )
}
