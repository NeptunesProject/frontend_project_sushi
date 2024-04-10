import { chakra } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const FooterLink = chakra(NavLink, {
  baseStyle: {
    fontFamily: `'Roboto', sans-serif`,
    fontSize: 12,
    transition: 'all 0.2s',
    fontWeight: 700,
    letterSpacing: '.35px',
    color: 'blue.200',

    _hover: {
      color: 'blue.100',
    },
  },
})

export default FooterLink
