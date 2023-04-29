import axios from 'axios'

const BASE_URL = 'https://swapi.dev/api/'

// Sayfalama özelliği kullanılarak belirli bir sayfadaki starship'leri almak için kullanılır.
export const getStarshipsByPage = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}starships/`, {
      params: { page }, // İstenilen sayfaya göre verileri getirir.
    })
    return response.data // Verileri döndürür.
  } catch (error) {
    console.error(error) // Hata durumunda hata mesajı yazdırır.
  }
}

// Daha fazla starship verisi yüklemek için kullanılır.
export const loadMoreStarships = async (nextPageUrl) => {
  try {
    const response = await axios.get(nextPageUrl) // Sonraki sayfadaki verileri alır.
    return response.data // Verileri döndürür.
  } catch (error) {
    console.error(error) // Hata durumunda hata mesajı yazdırır.
  }
}
