import { Box, Container } from '@chakra-ui/react'
import AppHeaderLg from './AppHeaderLg'
import AppHeaderSm from './AppHeaderSm'

const AppHeader = () => {
  return (
    <Container as="header" maxW="container.xl">
      <Box display={{ base: 'none', lg: 'block' }}>
        <AppHeaderLg />
      </Box>
      <Box display={{ base: 'block', lg: 'none' }}>
        <AppHeaderSm />
      </Box>
    </Container>
  )
}

export default AppHeader
