import { Link, Image } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import logo from '@/assets/img/logo.svg'

const Logo = () => {
  return (
    <Link to="/" as={RouterLink}>
      <Image src={logo} w={{ base: "60%", xl: 'auto' }} />
    </Link>
  )
}

export default Logo
