import './App.css'
import Header from './components/Header/Header'
import AboutUs from './components/AboutUs/AboutUs'
import SecondImage from './components/SecondImage/SecondImage'
import SecondSection from './components/SecondSection/SecondSection'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="main">
      <Header />
      <AboutUs />
      <SecondImage />
      <SecondSection />
      <Footer />
    </div>
  )
}

export default App
