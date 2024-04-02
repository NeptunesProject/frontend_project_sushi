import React from 'react'
import {
  Box,
  Button,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  Flex,
  Text,
} from '@chakra-ui/react'
import ProductsList from './ProductsList/ProductsList'
import AdditionalProducts from './AdditionalProducts'
import InfoToPay from './InfoToPay'
import { useBasketContext } from '../../contexts/BasketContext'
import { BasketTypes } from 'types'

interface Props {
  setSelectedBasketType: React.Dispatch<React.SetStateAction<BasketTypes>>
}

const BasketType = ({ setSelectedBasketType }: Props) => {
  const { productsCount } = useBasketContext()

  return (
    <>
      <DrawerHeader
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize={23}>Basket</Text>
        <DrawerCloseButton pos="static" />
      </DrawerHeader>

      <DrawerBody>
        <Flex flexDir="column" gap={5}>
          <Text fontSize={15} fontWeight={600}>
            Your order
          </Text>

          <ProductsList />

          <Box w="100%" h="1px" bg="grey" opacity={0.6} />

          <AdditionalProducts />

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
            onClick={() => setSelectedBasketType('delivery')}
          >
            Continue
          </Button>
        </Flex>
      </DrawerBody>
    </>
  )
}

export default BasketType
