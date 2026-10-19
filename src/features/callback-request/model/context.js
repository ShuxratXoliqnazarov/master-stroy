import { createContext, useContext } from 'react'

/** openCallback(subject?) — открыть форму; subject = { title, color? } (товар или тема заявки). */
export const CallbackRequestContext = createContext({ openCallback: () => {} })

export const useCallbackRequest = () => useContext(CallbackRequestContext)
