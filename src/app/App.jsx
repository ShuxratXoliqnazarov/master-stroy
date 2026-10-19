import { useCallback, useMemo, useState } from 'react'
import About from './components/About'
import Advantages from './components/Advantages'
import CallbackModal from './components/CallbackModal'
import Catalog from './components/Catalog'
import Delivery from './components/Delivery'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import { ModalContext } from './components/ModalContext'
import Production from './components/Production'
import TopBar from './components/TopBar'
import TopProducts from './components/TopProducts'
import Works from './components/Works'

export default function App() {
  const [modal, setModal] = useState({ open: false, product: null })

  const openCallback = useCallback((product = null) => setModal({ open: true, product }), [])
  const closeCallback = useCallback(() => setModal((m) => ({ ...m, open: false })), [])
  const ctx = useMemo(() => ({ openCallback }), [openCallback])

  return (
    <ModalContext.Provider value={ctx}>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Catalog />
        <About />
        <TopProducts />
        <Production />
        <Works />
        <Advantages />
        <Delivery />
      </main>
      <Footer />
      <CallbackModal open={modal.open} product={modal.product} onClose={closeCallback} />
    </ModalContext.Provider>
  )
}
