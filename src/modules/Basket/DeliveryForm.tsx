import React, { useState } from 'react'
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
import { BasketTypes } from '../../types'
import { ArrowBackIcon } from '@chakra-ui/icons'
import InfoToPay from './InfoToPay'

interface Props {
  setSelectedBasketType: React.Dispatch<React.SetStateAction<BasketTypes>>
}

const DeliveryForm = ({ setSelectedBasketType }: Props) => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [deliveryType, setDeliveryType] = useState('self')
  const [street, setStreet] = useState('')
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
            onClick={() => setSelectedBasketType('delivery')}
          >
            Continue
          </Button>
        </Flex>
      </DrawerBody>
    </>
  )
}

export default DeliveryForm
