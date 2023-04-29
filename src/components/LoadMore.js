import { useContext } from 'react'
import { StarshipContext } from '../contexts/StarshipContext'
import { Button, Col } from 'react-bootstrap'

function LoadMore() {
  const { handleLoadMore } = useContext(StarshipContext)

  // "Load More" butonuna tıklanınca handleLoadMore fonksiyonunu çağırır.

  return (
    <Col xs={12} className="d-flex justify-content-center my-3">
      <Button variant="light" className="" onClick={() => handleLoadMore()}>
        Load More
      </Button>
    </Col>
  )
}

export default LoadMore
