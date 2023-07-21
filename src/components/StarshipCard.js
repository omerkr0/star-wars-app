import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StarshipContext } from '../contexts/StarshipContext'
import { Card, Button, Col } from 'react-bootstrap'
import images from '../json/images.json'
import { motion } from 'framer-motion'

const container = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, translateY: 20 },
  visible: {
    opacity: 1,
    translateY: 0,
  },
}

function StarshipCard(props) {
  const { handleSelect } = useContext(StarshipContext)

  const { starship } = props

  // Starship görselini almak için images.json dosyasındaki ilgili görsel url'sini bulur
  const imgUrl = getImageUrl(starship.name)

  function getImageUrl(name) {
    const image = images.find((ship) => ship.name === name)
    return image ? image.img : ''
  }

  return (
    <Col lg={3} md={4}>
      <motion.div initial="hidden" animate="visible" variants={container}>
        <motion.div variants={item}>
          <Card className="starship-card mb-3">
            {/* Starship görseli */}
            <Card.Img
              variant="top"
              src={imgUrl}
              alt={starship.name}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body style={{ height: '13em' }}>
              {/* Starship adı */}
              <Card.Title>{starship.name}</Card.Title>
              <Card.Text>
                {/* Starship modeli */}
                Model: {starship.model} <br />
                {/* Starship hyperdrive rating'i */}
                Hyperdrive rating: {starship.hyperdrive_rating}
              </Card.Text>
              {/* Starship detay sayfasına gitmek için link */}
              <Link to={`/starships/${starship.url.split('/')[5]}`}>
                <Button variant="light" onClick={() => handleSelect(starship)}>
                  Details
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </motion.div>
      </motion.div>
    </Col>
  )
}

export default StarshipCard
