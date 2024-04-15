import React from 'react'
import {
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  Flex,
  Text,
  Button
} from '@chakra-ui/react'
import { BasketTypes } from '../../types'

interface Props {
  orderNumber: number
  setSelectedBasketType: React.Dispatch<React.SetStateAction<BasketTypes>>
}

const OrderConfirmation = ({ setSelectedBasketType, orderNumber }: Props) => {
  const busketTypeHandler = () =>{setSelectedBasketType('basket')}
  return (
    <>
      <DrawerHeader
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize={23}>Thank you!</Text>
        <DrawerCloseButton pos="static" />
      </DrawerHeader>

      <DrawerBody>
        <Flex flexDir="column" gap={5}>
          <Text fontSize={15} fontWeight={600}>
            {`The order #${orderNumber} has been received`}
          </Text>
          <Text fontSize={15} fontWeight={600}>
            We'll reach out to you for order confirmation as soon as possible
          </Text>
        </Flex>
      </DrawerBody>

      <Button
            alignSelf="end"
            w="60%"
            border="2px solid"
            borderColor="turquoise.77"
            bg="none"
            borderRadius={25}
            onClick={busketTypeHandler}
          >
            Thanks! Got it!
      </Button>

    </>
  )
}

export default OrderConfirmation
