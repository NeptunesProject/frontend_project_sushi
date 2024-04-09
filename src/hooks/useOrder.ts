import { addNewOrder } from '../api'
import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from '@tanstack/react-query'
import { Order } from '../types'

const useOrder = (
  options?: Omit<
    UseMutationOptions<Order, unknown, Order, unknown>,
    'mutationFn'
  >,
) => {  
  const mutation = useMutation(addNewOrder, { ...options, })

  return mutation;
}

export default useOrder;
