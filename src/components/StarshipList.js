import { useContext } from 'react'
import StarshipCard from './StarshipCard'
import { StarshipContext } from '../contexts/StarshipContext'
import LoadMore from './LoadMore'
import StarshipSearch from './StarshipSearch'
import { Row } from 'react-bootstrap'

function StarshipList() {
  // StarshipContext'ten filteredStarships'i alıyoruz
  const { filteredStarships } = useContext(StarshipContext)

  // StarshipCard componentini her bir filteredStarship objesi için çağırıp, bir dizi oluşturuyoruz.
  const renderStarships = () => {
    return (
      <Row>
        {filteredStarships.map((starship) => (
          <StarshipCard key={starship.url} starship={starship} />
        ))}
      </Row>
    )
  }

  // StarshipSearch, renderStarships ve LoadMore componentlerini return ediyoruz.
  return (
    <div className="container">
      <StarshipSearch />
      <div className="grid">{renderStarships()}</div>
      <LoadMore />
    </div>
  )
}

export default StarshipList
