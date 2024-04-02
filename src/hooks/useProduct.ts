import { getProduct } from '../api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { Product } from '../types'

const useProduct = (
  id: string,
  options?: Omit<
    UseQueryOptions<Product, unknown, Product, string[]>,
    'initialData'
  >,
) => {
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery(['product', id], () => getProduct(id), { ...options })

  return { product, isLoading, isError }
}

export default useProduct
