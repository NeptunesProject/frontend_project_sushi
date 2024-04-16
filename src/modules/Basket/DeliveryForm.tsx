
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
import { BasketTypes, Order } from '../../types'
import { ArrowBackIcon } from '@chakra-ui/icons'
import InfoToPay from './InfoToPay'
import {
  useAdditionalProductsContext,
  useBasketContext,
} from 'contexts/BasketContext'
import { DeliveryType, PaymentType } from '../../types'
import getCartItems from 'helpers/getCartItems'

interface Props {
  setSelectedBasketType: React.Dispatch<React.SetStateAction<BasketTypes>>
  setOrderData: React.Dispatch<React.SetStateAction<Order>>
}

const DeliveryForm = ({ setSelectedBasketType, setOrderData }: Props) => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [deliveryType, setDeliveryType] = useState(DeliveryType.pickup)
  const [deli, setDeli] = useState('self')
  const [street, setStreet] = useState('')
  const { products } = useBasketContext()
  const cartItems = getCartItems(products)

  const { personCount, sticks } = useAdditionalProductsContext()
  const sticksCount = personCount - sticks

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
    deliveryType: deliveryType,
    paymentType: PaymentType.online
  }

  const handleDeliveryForm = () => {
    setOrderData(orderData)
    setSelectedBasketType('paymentInfo')
  }
  useEffect(() => 
    {setDeliveryType(deli === 'delivery' ? DeliveryType.delivery : DeliveryType.pickup);
  console.log(deli, orderData.deliveryType)}
// eslint-disable-next-line react-hooks/exhaustive-deps
, [deli]);

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
              {deli === 'delivery'  && (
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

            <RadioGroup onChange={setDeli}>
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-expect-error */}
              <Stack direction="column" value={deli}>
                <Radio defaultChecked value={'self'}>
                  Self pick-up
                </Radio>
                <Radio value= {'delivery'} >Delivery to address</Radio>
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
            onClick={handleDeliveryForm}
          >
            Continue
          </Button>
        </Flex>
      </DrawerBody>
    </>
  )
}

export default DeliveryForm
