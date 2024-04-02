import { Box, Flex, Text } from '@chakra-ui/react'
import { useBasketContext } from '../../contexts/BasketContext'

const InfoToPay = () => {
  const { totalPrice, totalWeight } = useBasketContext()
  return (
    <Flex w="100%" justify="space-between" align="end">
      <Box>
        <Text color="grey.200">Total weight:</Text>
        <Text color="blue.200" fontWeight={600}>
          {Number(totalWeight.toFixed(2))} gram
        </Text>
      </Box>
      <Flex flexBasis="50%" justify="space-between">
        <Text color="grey.200">Total price:</Text>
        <Text color="blue.200" fontWeight={600}>
          {Number(totalPrice.toFixed(2))} zl
        </Text>
      </Flex>
    </Flex>
  )
}

export default InfoToPay
