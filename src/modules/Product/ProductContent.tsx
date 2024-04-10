import {
  Container,
  Flex,
  Heading,
  Image,
  Text,
  Button,
  Box,
  Center,
  Spinner,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useMemo } from 'react'
import stubImg from 'assets/img/stub.jpg'
import {
  useBasketContext,
  useBasketDispatchContext,
} from '../../contexts/BasketContext'
import useProduct from '../../hooks/useProduct'
import { Product } from '../../types'

const ProductContent = () => {
  const { id } = useParams()
  const { product, isLoading: isProductLoading } = useProduct(String(id), {
    enabled: Boolean(id),
  })

  const { addProduct, isProductAdded } = useBasketDispatchContext()
  const { products } = useBasketContext()

  const isThisProductAdded = useMemo(
    () => isProductAdded(product ?? ({} as Product)),
    [products, product],
  )

  if (isProductLoading)
    return (
      <Center h={600}>
        <Spinner />
      </Center>
    )

  if (!product) return <Heading>product was not found</Heading>

  return (
    <Container
      maxW="container.xl"
      py={10}
      fontFamily="'Roboto', sans-serif"
      display="flex"
      justifyContent="center"
    >
      <Box maxW={{ base: 500, lg: 1150 }} minW={{ base: 'auto', lg: '80%' }}>
        <Heading mb={10} color="blue.200">
          {product.name}
        </Heading>

        <Flex align="start" gap={12} flexWrap="wrap" justify="center">
          <Image
            src={product.img}
            fallback={<Image src={stubImg} />}
            boxSize={{ base: 250, sm: 490 }}
          />

          <Flex flexDir="column" gap={5} minW={{ md: 450 }}>
            {/*<Text alignSelf="start">*/}
            {/*  {product.map((descr) => (*/}
            {/*    <Text fontSize={15} lineHeight="21px">*/}
            {/*      {descr}*/}
            {/*    </Text>*/}
            {/*  ))}*/}
            {/*</Text>*/}

            <Text fontWeight={700} fontSize={15}>
              <Text>Weight: {product.weight}</Text>
              <Text>Pieces: {product.cartCount}</Text>
            </Text>

            <Flex w="100%" align="center" justify="space-between">
              <Text fontSize={30} fontWeight={700}>
                {product.price}{' '}
                <Text as="span" fontSize={15}>
                  zl
                </Text>
              </Text>
              <Button
                bg="turquoise.77"
                color="white"
                h={10}
                borderRadius={20}
                onClick={() => addProduct(product)}
              >
                {isThisProductAdded ? 'Added to basket' : 'Buy'}
              </Button>
            </Flex>

            <Flex
              borderRadius={10}
              gap={5}
              flexDir="column"
              w="100%"
              border="1px solid"
              borderColor="turquoise.77"
              py={5}
              px={9}
            >
              <Text fontWeight={700} color="turquoise.77">
                Delivery
              </Text>

              <Text>We offer a 10% discount for self pick-up</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Container>
  )
}

export default ProductContent
