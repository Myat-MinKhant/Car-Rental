import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from "./pages/Landing"
import Navbar from './layouts/Navbar'
import Footer from "./layouts/Footer"
import About from './pages/About'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Models from './pages/Models'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/models" element={<Models />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
