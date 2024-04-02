import { Center, Container, Flex, Spinner } from '@chakra-ui/react'
import CategoryGrid from './CategoryGrid'
import HomeSlider from './HomeSlider'
import Map from 'components/Map'
import DeliveryInfo from './DeliveryInfo'
import DeliveryAdvantages from './DeliveryAdvantages'
import useProducts from 'hooks/useProducts'
import { useMemo } from 'react'
import useCategories from '../../../hooks/useCategories'

const HomeContent = () => {
  const { products, isProductsLoading } = useProducts()
  const { categories, isCategoriesLoading } = useCategories()

  const isLoading = isProductsLoading || isCategoriesLoading
  const isDataEmpty = !products?.length || !categories?.length

  const productsByCategory = useMemo(() => {
    if (isLoading || isDataEmpty) return {}

    return categories.reduce((acc, category) => {
      const categoryProducts = products.filter(
        (product) => product.categoryId === category.id,
      )
      if (!categoryProducts.length) return acc
      return {
        ...acc,
        [category.name]: categoryProducts,
      }
    }, {})
  }, [categories, isDataEmpty, isLoading, products])


  return (
    <Container maxW="container.lg" pb={10} pt={20} w="85%">
      <HomeSlider />
      {isLoading ? (
        <Center h={400}>
          <Spinner />
        </Center>
      ) : (
        <Flex flexDirection="column" py={16} gap={20}>
          {Object.entries(productsByCategory).map(([category, products]) => (
            <CategoryGrid
              key={category}
              title={category}
              products={products as never}
            />
          ))}
        </Flex>
      )}
      <Map />
      <Flex flexDir="column" gap={20} mt={16}>
        <DeliveryInfo />
        <DeliveryAdvantages />
      </Flex>
    </Container>
  )
}

export default HomeContent
