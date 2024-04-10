import { Container, Flex } from '@chakra-ui/react'
import AppFooterLogo from './AppFooterLogo'
import AppFooterNav from './AppFooterNav'
import AppFooterAddress from './AppFooterAddress'
import AppFooterMedia from './AppFooterMedia'

const AppFooter = () => {
  return (
    <Container
      as="footer"
      maxW="container.xl"
      display="flex"
      justifyContent="center"
      mb={40}
    >
      <Flex
        gap={8}
        flexWrap="wrap"
        borderBottomRadius={10}
        align="end"
        justify="space-between"
        maxW={{ base: 500, lg: 1150 }}
        minW={{ base: 'auto', lg: '80%' }}
        bg="white"
        pt={6}
        pb={10}
        px={{ base: 10, lg: 20 }}
        boxShadow="2px 7px 11px rgba(0,0,0,.07)"
      >
        <AppFooterLogo />

        <AppFooterNav />

        <AppFooterAddress />

        <AppFooterMedia />
      </Flex>
    </Container>
  )
}

export default AppFooter
