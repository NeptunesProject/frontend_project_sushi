import { chakra, Flex } from '@chakra-ui/react'
import 'i18n/config'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { NAV_LINKS } from 'constants'

const MainNavLink = chakra(NavLink, {
  baseStyle: {
    fontSize: 13,
    transition: 'all 0.2s',
    fontWeight: 800,
    letterSpacing: '.35px',
    color: 'grey.100',

    _hover: {
      color: 'blue.100',
    },
    _activeLink: {
      color: 'turquoise.77',
    },
  },
})

const NavBar = () => {
  const { t } = useTranslation()
  return (
    <Flex align="center" justify="space-between" gap={{ base: 6, xl: 12 }}>
      {NAV_LINKS.map((route, idx) => (
        <MainNavLink to={route} key={`navbar.${idx}`} fontWeight={600}>
          {t(`navbar.${idx}`)}
        </MainNavLink>
      ))}
    </Flex>
  )
}

export default NavBar
