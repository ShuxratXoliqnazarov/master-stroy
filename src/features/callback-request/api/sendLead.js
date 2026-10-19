import { api } from '@/shared/api'

const LEAD_URL = import.meta.env.VITE_LEAD_URL

/** Отправка заявки. Без VITE_LEAD_URL — имитация успешного ответа (демо-режим). */
export async function sendLead(payload) {
  if (!LEAD_URL) {
    await new Promise((resolve) => setTimeout(resolve, 700))
    return { ok: true, demo: true }
  }
  const { data } = await api.post(LEAD_URL, payload)
  return data
}
