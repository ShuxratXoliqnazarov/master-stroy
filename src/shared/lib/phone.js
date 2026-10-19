/** Маска +7 (___) ___-__-__ */
export function formatPhone(value) {
  let digits = value.replace(/\D/g, '')
  if (!digits) return ''
  if (digits[0] === '8') digits = '7' + digits.slice(1)
  if (digits[0] !== '7') digits = '7' + digits
  digits = digits.slice(0, 11)

  const p = digits.slice(1)
  let out = '+7'
  if (p.length) out += ' (' + p.slice(0, 3)
  if (p.length >= 3) out += ')'
  if (p.length > 3) out += ' ' + p.slice(3, 6)
  if (p.length > 6) out += '-' + p.slice(6, 8)
  if (p.length > 8) out += '-' + p.slice(8, 10)
  return out
}

export const isPhoneValid = (value) => value.replace(/\D/g, '').length === 11

/** "+7 (926) 105-94-14" → "tel:+79261059414" */
export const telHref = (phone) => `tel:${phone.replace(/[^\d+]/g, '')}`
