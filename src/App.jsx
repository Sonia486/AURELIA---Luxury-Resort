import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import RoomsPage from './pages/RoomsPage'
import ExperiencesPage from './pages/ExperiencesPage'
import GalleryPage from './pages/GalleryPage'
import BookingPage from './pages/BookingPage'

function App() {
  const location = useLocation()

  return (
    <>
      <Loader />
      <CustomCursor />
      <div className="grain" />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App