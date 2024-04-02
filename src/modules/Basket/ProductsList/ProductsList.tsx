import { useBasketContext } from 'contexts/BasketContext'
import { Flex } from '@chakra-ui/react'
import ProductListItem from './ProductListItem'

const ProductsList = () => {
  const { products } = useBasketContext()
  return (
    <Flex flexDir="column" gap={4}>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </Flex>
  )
}

export default ProductsList
