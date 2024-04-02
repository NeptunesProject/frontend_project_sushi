import { chakra, Flex, Text } from '@chakra-ui/react'
import { ChakraFactoryComponent } from '../types'
import { PointIcon } from './icons'

const TextWithPoint = chakra(
  ({ children, className }: ChakraFactoryComponent) => (
    <Flex align="center" gap={2.5}>
      <PointIcon />
      <Text className={className} fontWeight={600}>
        {children}
      </Text>
    </Flex>
  ),
)

export default TextWithPoint
