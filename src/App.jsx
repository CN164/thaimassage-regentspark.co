import Header from './components/Header'
import CTA from './components/CallToAction'
import Footer from './components/Footer'
import Routers from './components/Router'
import './App.scss'

function App() {
  return (
    <>
      <Header />
      <Routers />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
