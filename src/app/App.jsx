import { CallbackRequestProvider } from '@/features/callback-request'
import { HomePage } from '@/pages/home'
import './styles/index.css'

export function App() {
  return (
    <CallbackRequestProvider>
      <HomePage />
    </CallbackRequestProvider>
  )
}
