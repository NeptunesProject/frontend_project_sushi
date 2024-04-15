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
import { useBasketContext } from '../../contexts/BasketContext'
import { BasketTypes, Order, Voucher } from 'types'

import useVoucherFromStorage from 'hooks/useVoucherFromStorage'
import { ArrowBackIcon } from '@chakra-ui/icons'
import useVoucherMutation from 'hooks/useVoucherMutation'
import usePostOrderMutation from 'hooks/usePostOrderMutation'

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

  const [voucher, setVoucher] = useState<Voucher>({ voucherKey: '' })
  const { handleVoucher, isValid } = useVoucherMutation(voucher)

  const { voucherDataFromStorage: isVoucherValid } = useVoucherFromStorage(
    'isVoucherValid',
    false,
  )
  const { handleSubmitOrder } = usePostOrderMutation({
    orderData,
    setOrderNumber,
    setSelectedBasketType,
  })

  const { voucherDataFromStorage: voucherCodeFromStorage } =
    useVoucherFromStorage('voucherCode', '')

  const handleSubmitVoucher = () => {
    handleVoucher()
  }

  const handleCloseBasket = () => {
    setSelectedBasketType('basket')
  }

  return (
    <>
      <DrawerHeader
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          cursor="pointer"
          onClick={() => setSelectedBasketType('delivery')}
          fontSize={15}
        >
          <ArrowBackIcon /> back{' '}
        </Text>
        <DrawerCloseButton pos="static" onClick={handleCloseBasket} />
      </DrawerHeader>

      <DrawerBody>
        <Text fontSize={18} fontWeight={600} mb={5}>
          Payment Information
        </Text>
        <Flex flexDir="column" gap={5}>
          <Text fontSize={15} fontWeight={600}>
            Your voucher
          </Text>
          <Flex gap={4} align="start" mb={4} justify="space-between">
            <Input
              value={voucher.voucherKey || voucherCodeFromStorage || ''}
              onInput={(e) => {
                const target = e.target as HTMLInputElement
                setVoucher({ voucherKey: target.value })
              }}
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
              isDisabled={(isValid || isVoucherValid) ?? undefined}
              onClick={handleSubmitVoucher}
            >
              {isValid || isVoucherValid ? 'Applied' : 'Apply'}
            </Button>
          </Flex>
          <Box w="100%" h="1px" bg="grey" opacity={0.6} />
          <InfoToPay basketType="paymentInfo" />
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