import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react'
import { BasketTypes} from '../../types'
import { ArrowBackIcon } from '@chakra-ui/icons'
import InfoToPay from './InfoToPay'
import {
  useBasketDispatchContext,
  useAdditionalProductsContext,
  useBasketContext,
} from 'contexts/BasketContext'
import { DeliveryType, PaymentType } from '../../types'
import usePostOrder from 'hooks/usePostOrder'
import getCartItems from 'helpers/getCartItems'
import useVoucher from 'hooks/useVoucher'

interface Props {
  setSelectedBasketType: React.Dispatch<React.SetStateAction<BasketTypes>>
  setOrderNumber: React.Dispatch<React.SetStateAction<number>>
}
const DeliveryForm = ({ setSelectedBasketType, setOrderNumber }: Props) => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [deliveryType, setDeliveryType] = useState('self')
  const [street, setStreet] = useState('')
  const { products } = useBasketContext()
  const cartItems = getCartItems(products)
  const postOrderMutation = usePostOrder()
  const voucherMutation = useVoucher()
  const { personCount, sticks } = useAdditionalProductsContext()
  const sticksCount = personCount - sticks
  const { clearAll } = useBasketDispatchContext()
  const [paymentType, setPaymentType] = useState('online')

  const orderData = {
    toDateTime: new Date().toJSON(),
    clientInfo: {
      phoneNumber,
      name,
    },
    deliveryAddress: {
      clientAddress: street,
    },
    comment: 'Leave at the door.',
    peopleCount: personCount,
    sticksCount,
    studySticksCount: sticks,
    cartItems,
    deliveryType: DeliveryType.delivery,
    paymentType: PaymentType.online,
  }

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


  const voucher = {
     voucherKey :"valid_50_voucher"
}

  const handleVoucher = () => {
    voucherMutation
      .mutateAsync(voucher)
      .then((data) => {
        if (data && data.code) {
          console.log(data.code)
        }

      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }


  useEffect(() => {
    orderData.deliveryType = deliveryType === 'delivery' ? DeliveryType.delivery : DeliveryType.pickup;
    if (paymentType === 'online') {
      orderData.paymentType = PaymentType.online;
  } else if (paymentType === 'cash') {
      orderData.paymentType = PaymentType.cash;
  } else {
      orderData.paymentType = PaymentType.terminal;
}
  }, [paymentType, deliveryType]);

  return (
    <>
      <DrawerHeader
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          cursor="pointer"
          onClick={() => setSelectedBasketType('basket')}
          fontSize={15}
        >
          <ArrowBackIcon /> back{' '}
        </Text>
        <DrawerCloseButton pos="static" />
      </DrawerHeader>
      <DrawerBody color="blue.200">
        <Flex flexDir="column" gap={5}>
          <Text fontSize={18} fontWeight={600} mb={5}>
            Confirm order
          </Text>

          <Box mb={10}>
            <Text fontWeight={600} mb={2}>
              Personal data:
            </Text>

            <Flex flexDir="column" gap={3} align="start" mb={4}>
              <Input
                value={name}
                onInput={(e) => setName((e.target as HTMLInputElement).value)}
                placeholder="name"
              />
              <Input
                value={phoneNumber}
                onInput={(e) =>
                  setPhoneNumber((e.target as HTMLInputElement).value)
                }
                type="number"
                placeholder="phone number"
              />
              {deliveryType === 'delivery' && (
                <Input
                  value={street}
                  onInput={(e) =>
                    setStreet((e.target as HTMLInputElement).value)
                  }
                  type="text"
                  placeholder="street"
                />
              )}
            </Flex>

            <RadioGroup onChange={setDeliveryType}>
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-expect-error */}
              <Stack direction="column" value={deliveryType}>
                <Radio defaultChecked value="self">
                  Self pick-up
                </Radio>
                <Radio value="delivery">Delivery to address</Radio>
              </Stack>
            </RadioGroup>

            <Text fontSize={18} fontWeight={600} mt={10} mb={3}>
            Payment properties
            </Text>

            <RadioGroup onChange={setPaymentType}>
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-expect-error */}
              <Stack direction="column" value={paymentType}>
                <Radio defaultChecked value="online">Pay On-Line</Radio>
                <Radio value="cash">Pay with Cash</Radio>            
                <Radio value="terminal">Pay with terminal</Radio>
              </Stack>
            </RadioGroup>




          </Box>

          <InfoToPay />

          <Button
            alignSelf="end"
            w="60%"
            border="2px solid"
            borderColor="turquoise.77"
            bg="none"
            borderRadius={25}
            // onClick={handleSubmitOrder}
           onClick={handleVoucher}
          >
            Continue
          </Button>
        </Flex>
      </DrawerBody>
    </>
  )
}

export default DeliveryForm
