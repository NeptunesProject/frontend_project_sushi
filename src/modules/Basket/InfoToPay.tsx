import { Box, Flex, Text } from '@chakra-ui/react'
import { useBasketContext } from '../../contexts/BasketContext'
import { FC } from 'react'
import useVoucherFromStorage from 'hooks/useVoucherFromStorage'

interface Props {
  basketType?: string
}

const InfoToPay: FC<Props> = ({ basketType }) => {
  const { totalPrice, totalWeight } = useBasketContext()
  const { voucherDataFromStorage: percentageFromStorage } =
    useVoucherFromStorage('discountPercentage', 0)
  const price = (Number(totalPrice) -  Number(totalPrice) * Number(percentageFromStorage)).toFixed(2)
  const discountSum = Number(
    Number(totalPrice) * Number(percentageFromStorage),
  ).toFixed(2)
  console.log(totalPrice)
  return (
    <Flex w="100%" justify="space-between" align="end">
      <Box>
        <Text color="grey.200">Total weight:</Text>
        <Text color="blue.200" fontWeight={600}>
          {Number(totalWeight.toFixed(2))} gram
        </Text>
      </Box>
      <Flex flexDir="column" flexBasis="50%" justify="space-between">
        {basketType === 'paymentInfo' && percentageFromStorage ? (
          <>
            <Flex justify="space-between">
              <Text color="grey.200"> Price:</Text>
              <Text color="blue.200" fontWeight={600}>
                {totalPrice} zl
              </Text>
            </Flex>
            <Flex justify="space-between">
              <Text color="grey.200">Discount:</Text>
              <Text color="blue.200" fontWeight={600}>
                -{discountSum} zl
              </Text>
            </Flex>
          </>
        ) : null}
        <Flex justify="space-between">
          <Text color="grey.200">Total price:</Text>
          <Text color="blue.200" fontWeight={600}>
            {Number(price).toFixed(2)} zl
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default InfoToPay
