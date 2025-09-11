import axios from 'axios'

const BASE_URL = 'https://swapi.info/api/'

// Tüm starship'leri almak için kullanılır (yeni API tek seferde tüm verileri döndürür).
export const getAllStarships = async () => {
  try {
    const response = await axios.get(`${BASE_URL}starships`)
    return response.data // Tüm starship verilerini döndürür.
  } catch (error) {
    console.error(error) // Hata durumunda hata mesajı yazdırır.
  }
}

// Sayfalama özelliği kullanılarak belirli bir sayfadaki starship'leri almak için kullanılır.
// Yeni API'de sayfalama yok, bu yüzden tüm verileri alıp client-side sayfalama yapıyoruz.
export const getStarshipsByPage = async (page, pageSize = 8) => {
  try {
    const allStarships = await getAllStarships()
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize
    const pageStarships = allStarships.slice(startIndex, endIndex)
    
    return {
      results: pageStarships,
      next: endIndex < allStarships.length ? `page-${page + 1}` : null,
      count: allStarships.length
    }
  } catch (error) {
    console.error(error) // Hata durumunda hata mesajı yazdırır.
  }
}

// Daha fazla starship verisi yüklemek için kullanılır.
// Yeni API'de sayfalama yok, bu yüzden client-side sayfalama yapıyoruz.
export const loadMoreStarships = async (currentPage, pageSize = 8) => {
  try {
    return await getStarshipsByPage(currentPage + 1, pageSize)
  } catch (error) {
    console.error(error) // Hata durumunda hata mesajı yazdırır.
  }
}
