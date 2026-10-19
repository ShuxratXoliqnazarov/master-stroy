import { isPhoneValid } from '@/shared/lib'

export const INITIAL_VALUES = { name: '', phone: '', agree: false }

export function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Введите имя'
  if (!isPhoneValid(values.phone)) errors.phone = 'Введите телефон полностью'
  if (!values.agree) errors.agree = 'Необходимо согласие'
  return errors
}
