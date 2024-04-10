import { Product } from 'types'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import stubImg from 'assets/img/stub.jpg'
import CountButton from '../../../ui/CountButton'
import closeIcon from 'assets/img/delete.svg'
import { useBasketDispatchContext } from '../../../contexts/BasketContext'

interface Props {
  product: Product & { count: number }
}

const ProductListItem = ({ product }: Props) => {
  const { addProduct, removeProduct, deleteProduct } =
    useBasketDispatchContext()
  return (
    <Flex align="center" justify="space-between" w="100%" color="blue.200">
      <Flex gap={2} align="center">
        <Image
          src={product.img}
          boxSize={12}
          fallback={<Image boxSize={12} src={stubImg} />}
        />

        <Box>
          <Text maxW={130} fontSize={14} lineHeight="14px" fontWeight={600}>
            {product.name}
          </Text>
          <Text fontSize={13}>
            {Number(product.weight * product.count).toFixed(2)} gram /{' '}
            {product.size * product.count} шт.
          </Text>
        </Box>
      </Flex>

      <Flex align="center" gap={3}>
        <Flex align="center" gap={2}>
          <CountButton
            borderLeftRadius={20}
            borderRightRadius={5}
            onClick={() => removeProduct(product)}
          >
            -
          </CountButton>

          <Text fontSize={12} fontWeight={600}>
            {product.count}
          </Text>

          <CountButton
            borderRightRadius={20}
            borderLeftRadius={5}
            onClick={() => addProduct(product)}
          >
            +
          </CountButton>
        </Flex>

        <Text minW={10} fontWeight={600}>
          {product.price * product.count} zl
        </Text>

        <Image
          cursor="pointer"
          src={closeIcon}
          onClick={() => deleteProduct(product)}
        />
      </Flex>
    </Flex>
  )
}

export default ProductListItem
