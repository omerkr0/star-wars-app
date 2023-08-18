import logo from '../assets/star-wars-logo.png'

function StarWarsLogo() {
  return (
    <img
      src={logo}
      alt="Star Wars Logo"
      className="my-2 mx-auto d-block star-wars-logo"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  )
}

export default StarWarsLogo
