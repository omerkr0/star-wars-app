import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StarshipList from './components/StarshipList'
import StarshipDetail from './components/StarshipDetail'
import { StarshipContextProvider } from './contexts/StarshipContext'
import StarWarsLogo from './components/StarWarsLogo'

function App() {
  return (
    // StarshipContextProvider ile ana uygulama bileşenimizi sarmalıyoruz
    <StarshipContextProvider>
      {/* Star Wars logosu ekleme */}
      <StarWarsLogo />
      <BrowserRouter>
        <Routes>
          {/* Ana sayfa için rota: / */}
          <Route path="/" element={<StarshipList />} />
          {/* Detay sayfası için rota: /starships/:id */}
          <Route path="/starships/:id" element={<StarshipDetail />} />
          {/* Rota bulunamadığında 404 Not Found sayfası */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </StarshipContextProvider>
  )
}

export default App
