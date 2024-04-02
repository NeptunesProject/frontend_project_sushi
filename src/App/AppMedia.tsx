import { Flex, Link } from '@chakra-ui/react'
import { InstagramIcon, TikTokIcon } from 'ui/icons'

const AppMedia = () => {
  return (
    <Flex
      flexDir="column"
      w={50}
      bg="white"
      align="center"
      py={4}
      borderTopLeftRadius={10}
      borderBottomLeftRadius={10}
      boxShadow="2px 7px 11px rgb(0 0 0/7%)"
      gap={4}
    >
      <Link
        color="blue.50"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer noopener"
        _hover={{ color: 'blue.200' }}
      >
        <InstagramIcon boxSize={25} />
      </Link>

      <Link
        color="blue.50"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer noopener"
        _hover={{ color: 'blue.200' }}
      >
        <TikTokIcon w={25} h={8} />
      </Link>
    </Flex>
  )
}

export default AppMedia
