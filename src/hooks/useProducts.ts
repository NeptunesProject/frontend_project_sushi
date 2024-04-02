import { getProducts } from '../api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { Product } from '../types'

const useProducts = (
  options?: Omit<
    UseQueryOptions<Product[], unknown, Product[], string[]>,
    'initialData'
  >,
) => {
  const { data: products, isLoading: isProductsLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    ...options,
  })

  return {
    products,
    isProductsLoading,
  }
}

export default useProducts
