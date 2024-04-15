import {
  // Box,
  Center,
  Drawer,
  DrawerContent,
  Image,
  useDisclosure,
} from '@chakra-ui/react'
import basket from 'assets/img/basket.svg'
import DeliveryForm from './DeliveryForm'
import { BasketTypes } from '../../types'
import BasketType from './BasketType'
import { useState } from 'react'
import { useBasketContext } from '../../contexts/BasketContext'
import OrderConfirmation from './OrderConfirmation'

const Basket = () => {
  const [selectedBasketType, setSelectedBasketType] =
    useState<BasketTypes>('basket')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { productsCount } = useBasketContext()
  const [orderNumber, setOrderNumber] = useState(0)

  return (
    <>
      <Center
        cursor="pointer"
        boxSize={50}
        borderTopLeftRadius={10}
        borderBottomLeftRadius={10}
        boxShadow="2px 7px 11px rgba(0,0,0,.28)"
        bg="white"
        onClick={onOpen}
        pos="relative"
      >
        <Image boxSize={30} src={basket} />
        {productsCount ? (
          <Center
            pos="absolute"
            bottom={0}
            right={0}
            borderRadius="50%"
            bg="red"
            color="white"
            boxSize={4}
            fontSize={12}
          >
            {productsCount}
          </Center>
        ) : null}
      </Center>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        blockScrollOnMount={false}
        isFullHeight={false}
        autoFocus={false}
        size="sm"
      >
        <DrawerContent>
          {selectedBasketType === 'basket' && (
            <BasketType setSelectedBasketType={setSelectedBasketType} />
          )}
          {selectedBasketType === 'delivery' && (
            <DeliveryForm
              setSelectedBasketType={setSelectedBasketType}
              setOrderNumber={setOrderNumber}
            />
          )}
          {selectedBasketType === 'confirmation' && (
            <OrderConfirmation orderNumber={orderNumber} />
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Basket
