import React from 'react'
import {
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  Flex,
  Text,
} from '@chakra-ui/react'

interface Props {
  orderNumber: number
}
const OrderConfirmation = ({ orderNumber }: Props) => {
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
    </>
  )
}

export default OrderConfirmation
