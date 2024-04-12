import { Product } from 'types'
import { Button, Flex, Heading} from '@chakra-ui/react'
import ProductCard from './ProductCard'
import {  useState } from 'react'

interface Props<T> {
  title: string
  products: T[]
}

const CategoryGrid = <T extends Product>({ title, products }: Props<T>) => {
  const[isView, setIsView] =  useState(false);
 const newProducts: typeof products = isView ? products : products.slice(0, 12);
  return (
    <Flex flexDirection="column" gap={9} mb={-120}>
      <Heading textTransform="capitalize" fontSize={28} color="blue.200" pt={120} 
      id={`${title}`}>
        {title}
      </Heading>
      <Flex flexWrap="wrap" gap={5} justify={{ base: 'center', md: 'start' }}>
        {newProducts.map((product, idx) => ( <ProductCard key={`product_${idx}`} product={product}/>))}
      </Flex>
        {products.length >= 12 &&(
          <Button
          _groupHover={{
            color: 'blue.100',
          }}
            textAlign="center"
            alignSelf="center"
            fontSize={12}
            lineHeight="12px"
            letterSpacing=".15px"
            color="grey.100"
            fontWeight={800}
            w="10%"
            border="3px solid"
            borderColor="grey.100"
            bg="none"
            borderRadius={25}
            mb={-10}
            onClick={()=>{setIsView(!isView)}}>
            {!isView ? 'Show MORE' : 'Show LESS'} 
          </Button>
        )}
    </Flex>
  )
}
export default CategoryGrid
