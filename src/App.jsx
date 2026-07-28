import { useLocation } from 'react-router-dom'
import Header from './components/Header'
import CTA from './components/CallToAction'
import Footer from './components/Footer'
import MobileActionBar from './components/MobileActionBar'
import Routers from './components/Router'
import './App.scss'

function App() {
  const { pathname } = useLocation()
  // The contact page already carries the address, phones and map
  const showCta = pathname.toLowerCase() !== '/contact'

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" className="app-main">
        <Routers />
      </main>
      {showCta && <CTA />}
      <Footer />
      <MobileActionBar />
    </div>
  )
}

export default App
