import { useEffect, useRef, useState } from 'react'
import { CONTACTS } from '@/shared/config'
import { formatPhone, useLockScroll } from '@/shared/lib'
import { CloseIcon } from '@/shared/ui'
import { sendLead } from '../api/sendLead'
import { INITIAL_VALUES as INITIAL, validate } from '../model/validate'

export function CallbackModal({ open, subject, onClose }) {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const nameRef = useRef(null)
  useLockScroll(open)

  useEffect(() => {
    if (!open) return
    setValues(INITIAL)
    setErrors({})
    setStatus('idle')
    const t = setTimeout(() => nameRef.current?.focus(), 50)
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(t)
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  const update = (field, value) => {
    const next = { ...values, [field]: value }
    setValues(next)
    if (errors[field]) setErrors(validate(next))
  }

  const submit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) return

    setStatus('sending')
    try {
      await sendLead({
        name: values.name.trim(),
        phone: values.phone,
        product: subject?.title ?? null,
        color: subject?.color ?? null,
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const field =
    'h-[54px] w-full rounded-full border bg-white px-6 text-[15px] outline-none transition focus:border-accent focus:ring-3 focus:ring-accent/20'

  return (
    <div
      className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-black/60 p-4"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="callback-title"
        className="relative max-h-full w-full max-w-[460px] overflow-y-auto rounded-[30px] bg-white px-6 pt-12 pb-8 shadow-2xl sm:px-10"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5 hover:text-accent"
          aria-label="Закрыть"
        >
          <CloseIcon className="h-6 w-6" />
        </button>

        {status === 'success' ? (
          <div className="py-6 text-center" role="status">
            <h2 id="callback-title" className="text-2xl font-bold">Спасибо!</h2>
            <p className="mt-4 text-[15px] text-ink/80">
              Заявка принята. Менеджер перезвонит вам в рабочее время ({CONTACTS.hours}).
            </p>
            <button type="button" onClick={onClose} className="btn-accent mt-8">Хорошо</button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            <h2 id="callback-title" className="text-2xl font-bold">Заказать звонок</h2>
            <p className="mt-3 text-sm text-ink/70">
              {subject
                ? <>Заказ: <b className="text-ink">{subject.title}</b>{subject.color && `, цвет: ${subject.color.toLowerCase()}`}. Оставьте телефон — уточним детали.</>
                : 'Оставьте номер — перезвоним и проконсультируем.'}
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="cb-name" className="sr-only">Ваше имя</label>
                <input
                  ref={nameRef}
                  id="cb-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Ваше имя"
                  value={values.name}
                  onChange={(e) => update('name', e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'cb-name-err' : undefined}
                  className={`${field} ${errors.name ? 'border-red-500' : 'border-black/15'}`}
                />
                {errors.name && <p id="cb-name-err" className="mt-1 pl-6 text-xs text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="cb-phone" className="sr-only">Телефон</label>
                <input
                  id="cb-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={values.phone}
                  onChange={(e) => update('phone', formatPhone(e.target.value))}
                  onFocus={() => !values.phone && update('phone', '+7')}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'cb-phone-err' : undefined}
                  className={`${field} ${errors.phone ? 'border-red-500' : 'border-black/15'}`}
                />
                {errors.phone && <p id="cb-phone-err" className="mt-1 pl-6 text-xs text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label className="flex cursor-pointer items-start gap-3 text-xs leading-snug text-ink/80">
                  <input
                    type="checkbox"
                    checked={values.agree}
                    onChange={(e) => update('agree', e.target.checked)}
                    aria-invalid={!!errors.agree}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
                  />
                  Я согласен(на) на обработку персональных данных
                </label>
                {errors.agree && <p className="mt-1 pl-7 text-xs text-red-600">{errors.agree}</p>}
              </div>
            </div>

            {status === 'error' && (
              <p className="mt-4 text-sm text-red-600" role="alert">
                Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.
              </p>
            )}

            <button type="submit" disabled={status === 'sending'} className="btn-accent mt-6 w-full sm:w-full disabled:opacity-60">
              {status === 'sending' ? 'Отправляем…' : 'Отправить'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
