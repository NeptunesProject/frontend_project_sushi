import { Product } from 'types'
import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useMemo, useState } from 'react'
import stubImg from 'assets/img/stub.jpg'
import {
  useBasketContext,
  useBasketDispatchContext,
} from 'contexts/BasketContext'
import CountButton from 'ui/CountButton'

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const { addProduct, isProductAdded } = useBasketDispatchContext()
  const { products } = useBasketContext()
  const [count, setCount] = useState(1)
  const navigate = useNavigate()
  const { img, price, weight, cartCount, name, id } = product

  const isThisProductAdded = useMemo(() => isProductAdded(product), [products])
  return (
    <Flex
      fontFamily="'Roboto', sans-serif"
      w={375}
      cursor="pointer"
      bg="white"
      borderRadius={10}
      boxShadow="1px 2px 10px rgba(0,0,0,.12)"
    >
      <Image
        fallback={<Image w={180} h={170} borderLeftRadius={10} src={stubImg} />}
        onClick={() => navigate(`/product/${id}`)}
        w={180}
        h={170}
        src={img}
        borderLeftRadius={10}
      />

      <Flex
        w="100%"
        flexDir="column"
        align="start"
        justify="space-between"
        p={2.5}
        pl={{ base: 2, md: 4 }}
        overflow="hidden"
      >
        <Text
          onClick={() => navigate(`/product/${id}`)}
          fontSize={15}
          lineHeight="19px"
          fontWeight={700}
          letterSpacing=".35px"
          color="blue.200"
          whiteSpace="nowrap"
        >
          {name}
        </Text>

        <Text fontSize={12} fontWeight={200} color="black" alignSelf="start">
          {weight} / {cartCount}
        </Text>

        <Flex align="center" justify="space-between" w="100%">
          <Text color="blue.200" fontWeight={700}>
            {price} zł
          </Text>

          <Flex gap={{ base: 0.5, md: 1 }}>
            <CountButton
              onClick={(e) => {
                e.preventDefault()
                if (count > 1) {
                  setCount((prev) => prev - 1)
                }
              }}
              borderLeftRadius={20}
              borderRightRadius={5}
            >
              -
            </CountButton>
            <Text>{count}</Text>

            <CountButton
              onClick={(e) => {
                e.preventDefault()
                setCount((prev) => prev + 1)
              }}
              borderRightRadius={20}
              borderLeftRadius={5}
            >
              +
            </CountButton>
          </Flex>
        </Flex>
        <Button
          w="100%"
          bg="turquoise.77"
          color="white"
          h={8}
          borderRadius={20}
          onClick={() => addProduct(product, count)}
        >
          {isThisProductAdded ? 'Added to basket' : 'Buy'}
        </Button>
      </Flex>
    </Flex>
  )
}

export default ProductCard
