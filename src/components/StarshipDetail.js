import { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { StarshipContext } from '../contexts/StarshipContext'
import { Card, Button, Col, Row } from 'react-bootstrap'
import images from '../json/images.json'
import { motion } from 'framer-motion'

function StarshipDetail() {
  // StarshipContext'den starships objesi alınır
  const { starships } = useContext(StarshipContext)

  // URL parametresinden id alınır
  const { id } = useParams()

  // React Router navigate fonksiyonu alınır
  const navigate = useNavigate()

  // id'ye göre doğru starship bulunur
  const starship = starships.find((starship) =>
    starship.url.endsWith(`/${id}/`),
  )

  // starship resmi images.json dosyasından alınır
  const img = images.find((ship) => ship.name === starship.name)?.img

  // Geri git butonu için click event handler fonksiyonu oluşturulur
  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={'5'}>
          <Card className="my-3 mx-1 p-3">
            <Card.Title className="text-center mb-3">
              {starship.name}
            </Card.Title>
            <Card.Img variant="top" src={img} alt={starship.name} />
            <Card.Body>
              <Card.Text>
                {/* Starship özellikleri yazdırılır */}
                Model: {starship.model} <br />
                Max Atmosphering Speed: {starship.max_atmosphering_speed} <br />
                Manufacturer: {starship.manufacturer} <br />
                Crew: {starship.crew} <br />
                Cargo Capacity: {starship.cargo_capacity} <br />
              </Card.Text>
              {/* Geri git butonuna click event handler fonksiyonu atanır */}
              <Button variant="light" onClick={handleGoBack}>
                Go Back
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </motion.div>
  )
}

export default StarshipDetail
