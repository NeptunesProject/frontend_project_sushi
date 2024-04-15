import { Box, Container } from '@chakra-ui/react'
import AppHeaderLg from './AppHeaderLg'
import AppHeaderSm from './AppHeaderSm'

const AppHeader = () => {
  return (
    <Container as="header" maxW="100%" px={"1%"}
    pos="fixed" top="0" left="0" right={0} pb={10}
    bgColor={"white.200"}
    boxShadow="2px 7px 11px rgba(0,0,0,.07)"
    zIndex={10}
    
    >
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
