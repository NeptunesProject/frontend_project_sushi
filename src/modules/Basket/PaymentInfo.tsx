import React, { useState } from 'react'
import {
  Box,
  Button,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  Flex,
  Input,
  Text,
} from '@chakra-ui/react'

import InfoToPay from './InfoToPay'
import {
  useBasketContext,
  useBasketDispatchContext,
} from '../../contexts/BasketContext'
import { BasketTypes, Order } from 'types'
import usePostOrder from 'hooks/usePostOrder'

interface Props {
  orderData: Order
  setOrderNumber: React.Dispatch<React.SetStateAction<number>>
  setSelectedBasketType: React.Dispatch<React.SetStateAction<BasketTypes>>
}

const PaymentInfo = ({
  setSelectedBasketType,
  orderData,
  setOrderNumber,
}: Props) => {
  const { productsCount } = useBasketContext()
  const { clearAll } = useBasketDispatchContext()
  const postOrderMutation = usePostOrder()
  const [voucher, setVoucher] = useState('')

  const handleSubmitOrder = () => {
    postOrderMutation
      .mutateAsync(orderData)
      .then((data) => {
        if (data && typeof data.id === 'number') {
          setOrderNumber(data.id)
          clearAll()
          setSelectedBasketType('confirmation')
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <>
      <DrawerHeader
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize={23}>Payment Information</Text>
        <DrawerCloseButton pos="static" />
      </DrawerHeader>

      <DrawerBody>
        <Flex flexDir="column" gap={5}>
          <Text fontSize={15} fontWeight={600}>
            Your voucher
          </Text>
          <Flex gap={4} align="start" mb={4} justify="space-between">
            <Input
              value={voucher}
              onInput={(e) => setVoucher((e.target as HTMLInputElement).value)}
              placeholder="voucher"
              w="40%"
            />
            <Button
              alignSelf="end"
              w="30%"
              border="2px solid"
              borderColor="turquoise.77"
              bg="none"
              borderRadius={25}
              isDisabled={productsCount === 0}
              onClick={handleSubmitOrder}
            >
              Apply
            </Button>
          </Flex>
          <Box w="100%" h="1px" bg="grey" opacity={0.6} />
          <InfoToPay />
          <Button
            alignSelf="end"
            w="60%"
            border="2px solid"
            borderColor="turquoise.77"
            bg="none"
            borderRadius={25}
            isDisabled={productsCount === 0}
            onClick={handleSubmitOrder}
          >
            Continue
          </Button>
        </Flex>
      </DrawerBody>
    </>
  )
}

export default PaymentInfo
