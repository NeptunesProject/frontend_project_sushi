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
import { BasketTypes, Order, DeliveryType, PaymentType } from '../../types'
import { ArrowBackIcon } from '@chakra-ui/icons'
import InfoToPay from './InfoToPay'
import useOrder from 'hooks/useOrder'
import { useBasketContext, useBasketDispatchContext, useAdditionalProductsContext, } from 'contexts/BasketContext'

interface Props {
  setSelectedBasketType: React.Dispatch<React.SetStateAction<BasketTypes>>
}


const DeliveryForm = ({ setSelectedBasketType }: Props) => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [deliveryType, setDeliveryType] = useState('self')
  const [street, setStreet] = useState('')
  const orderMutation = useOrder();
  let newOrd: Order ={
    toDateTime: 0,
    clientInfo: {
      phoneNumber: '',
      name: ''
    },
    deliveryAddress: {
      clientAddress: ''
    },
    comment: '',
    peopleCount: 0,
    cartItems: [],
    sticksCount: 0,
    studySticksCount: 0,
    deliveryType: DeliveryType.pickup,
    paymentType: PaymentType.cash,
    statusType: 'CREATED'
  };
  ;
  const { products } = useBasketContext()
  const {  clearAll } = useBasketDispatchContext()
  products.forEach(element => {newOrd.cartItems.push({ id : element.id, quantity : element.count})});
  const { personCount, sticks, setCount  } = useAdditionalProductsContext();
  newOrd.studySticksCount = sticks;
  newOrd.peopleCount = personCount;
  newOrd.sticksCount = personCount;
  
  newOrd.toDateTime = Date.now();
  const handleSubmitOrder = () => {
    setSelectedBasketType('delivery')
    orderMutation.mutate(newOrd)
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
          </Box>

          <InfoToPay />

          <Button
            alignSelf="end"
            w="60%"
            border="2px solid"
            borderColor="turquoise.77"
            bg="none"
            borderRadius={25}
            onClick={() => {
            newOrd.deliveryType = deliveryType === 'delivery' ? DeliveryType.delivery : DeliveryType.pickup;
            newOrd.clientInfo.phoneNumber = phoneNumber;
            newOrd.clientInfo.name = name;
            newOrd.deliveryAddress.clientAddress = street;
            handleSubmitOrder();
            clearAll();
            setCount('personCount', 1)
            setCount('sticks', 0)
            }}
          >
            Continue
          </Button>
        </Flex>
      </DrawerBody>
    </>
  )
}

export default DeliveryForm
