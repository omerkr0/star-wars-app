import { createContext, useState, useEffect } from 'react'
import { getStarshipsByPage, loadMoreStarships } from '../api/api'

// StarshipContext adında bir context oluşturuluyor
const StarshipContext = createContext()

// StarshipContextProvider bileşeni, tüm starship verilerini ve arama özelliklerini içerir
const StarshipContextProvider = (props) => {
  // state'ler oluşturuluyor
  const [starships, setStarships] = useState([]) // tüm starship verileri
  const [searchTerm, setSearchTerm] = useState('') // arama sorgusu
  const [currentPage, setCurrentPage] = useState(1) // mevcut sayfa numarası
  const [hasMore, setHasMore] = useState(true) // daha fazla veri var mı

  // useEffect kullanarak, sayfa yüklendiğinde getStarshipsByPage fonksiyonu çağrılıyor
  useEffect(() => {
    const getStarships = async () => {
      const data = await getStarshipsByPage(1) // ilk sayfayı getirir
      setStarships(data.results) // ilk sayfadan gemi verilerini alır
      setCurrentPage(1) // sayfa numarasını 1 olarak set eder
      setHasMore(data.next !== null) // daha fazla veri var mı kontrol eder
    }
    getStarships() // fonksiyonu çağırır
  }, [])

  // filteredStarships, searchTerm kullanarak arama sorgusuna göre filtrelenmiş starship'leri tutar
  const filteredStarships = starships.filter((starship) => {
    return (
      starship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      starship.model.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  // handleSearch, arama sorgusunu ayarlar
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  // handleLoadMore, bir sonraki sayfadaki starship verilerini getirir
  const handleLoadMore = async () => {
    if (hasMore) {
      // daha fazla veri var mı kontrol ediliyor
      const data = await loadMoreStarships(currentPage)
      setStarships((prevStarships) => [...prevStarships, ...data.results])
      setCurrentPage(prevPage => prevPage + 1)
      setHasMore(data.next !== null)
    }
  }

  // handleSelect, verilen id'ye göre starship verisini döndürür
  const handleSelect = (id) => {
    return starships.find((starship) => starship.url.endsWith(`/${id}`))
  }

  // starshipContextValue, starship verilerini ve arama özelliklerini içeren bir objedir
  const starshipContextValue = {
    starships,
    filteredStarships,
    searchTerm,
    currentPage,
    hasMore,
    handleSearch,
    handleLoadMore,
    handleSelect,
  }

  // StarshipContext.Provider, tüm bileşenlerin StarshipContext'i kullanmasına olanak tanır
  return (
    <StarshipContext.Provider value={starshipContextValue}>
      {props.children}
    </StarshipContext.Provider>
  )
}

export { StarshipContext, StarshipContextProvider }
