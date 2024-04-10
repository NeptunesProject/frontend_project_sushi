import { Flex, Image } from '@chakra-ui/react'
import bgLeft from 'assets/img/bg-left.svg'
import bgRight from 'assets/img/bg-right.svg'

const ImagesLayout = () => {
  return (
    <Flex
      h="100vh"
      w="100%"
      pos="fixed"
      top={0}
      justify="space-between"
      align="end"
      zIndex={-1}
    >
      <Image src={bgLeft} />
      <Image src={bgRight} />
    </Flex>
  )
}

export default ImagesLayout
