import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  Flex,
  Radio,
  RadioGroup,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'

import InfoToPay from './InfoToPay'
import { useBasketContext } from '../../contexts/BasketContext'
import { BasketTypes, Order, PaymentType, Voucher } from 'types'

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
  const [pay, setPay] = useState('cash')
  const [voucher, setVoucher] = useState<Voucher>({ voucherKey: '' })
  const { handleVoucher, isValid } = useVoucherMutation(voucher)
  const [caution, setCaution] = useState(false)
  // const [check, setCheck] = useState(false)
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
    
    handleVoucher();
  if(!isVoucherValid ){setCaution(true)}else{setCaution(false)}
  }

  const handleCloseBasket = () => {
    setSelectedBasketType('basket')
  }


  useEffect(() => {
    if (pay === 'online') {
      orderData.paymentType = PaymentType.online;
  } else if (pay === 'cash') {
      orderData.paymentType = PaymentType.cash;
  } else {
      orderData.paymentType = PaymentType.terminal;
}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pay]);


useEffect(() => {
  orderData.code = voucher.voucherKey
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [voucher]);


useEffect(() => {
  if(isVoucherValid){setCaution(false)} 

}, [isVoucherValid]);

  return (
    <>
    {console.log('caution ', caution)}
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
            
          </Flex>{
          caution ?  (<Text fontSize={12} fontWeight={900} mb={5} color={'red'}>
            Attention! Check your voucher token and try again!
            </Text>) : null}
          <Box w="100%" h="1px" bg="grey" opacity={0.6} />

          <RadioGroup onChange={setPay}>
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-expect-error */}
              <Stack direction="column" value={pay}>
                <Radio defaultChecked value="online">Pay On-Line</Radio>
                <Radio value="cash">Pay with Cash</Radio>            
                <Radio value="terminal">Pay with terminal</Radio>
              </Stack>
            </RadioGroup>
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
