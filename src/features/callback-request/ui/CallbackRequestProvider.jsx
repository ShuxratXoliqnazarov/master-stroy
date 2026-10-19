import { useCallback, useMemo, useState } from 'react'
import { CallbackRequestContext } from '../model/context'
import { CallbackModal } from './CallbackModal'

export function CallbackRequestProvider({ children }) {
  const [modal, setModal] = useState({ open: false, subject: null })

  const openCallback = useCallback((subject = null) => setModal({ open: true, subject }), [])
  const close = useCallback(() => setModal((m) => ({ ...m, open: false })), [])
  const value = useMemo(() => ({ openCallback }), [openCallback])

  return (
    <CallbackRequestContext.Provider value={value}>
      {children}
      <CallbackModal open={modal.open} subject={modal.subject} onClose={close} />
    </CallbackRequestContext.Provider>
  )
}
