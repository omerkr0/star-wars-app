import { useContext } from 'react'
import { StarshipContext } from '../contexts/StarshipContext'
import { Form } from 'react-bootstrap'

function StarshipSearch() {
  const { handleSearch } = useContext(StarshipContext)

  // Search kutusu render ediliyor
  return (
    <div className="search-box my-3">
      <Form>
        <Form.Label>Search</Form.Label>
        <Form.Control
          id="search-input"
          type="text"
          placeholder="Search by name or model"
          onChange={(e) => handleSearch(e)}
          className="search-input"
        />
      </Form>
    </div>
  )
}

export default StarshipSearch
