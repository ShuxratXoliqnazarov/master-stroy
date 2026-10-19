import { About } from '@/widgets/about'
import { Advantages } from '@/widgets/advantages'
import { Catalog } from '@/widgets/catalog'
import { Delivery } from '@/widgets/delivery'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Hero } from '@/widgets/hero'
import { Production } from '@/widgets/production'
import { TopBar } from '@/widgets/top-bar'
import { TopProducts } from '@/widgets/top-products'
import { Works } from '@/widgets/works'

export function HomePage() {
  return (
    <>
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
    </>
  )
}
