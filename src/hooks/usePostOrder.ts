import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { Order } from '../types'
import { postOrder } from 'api'

const usePostOrder = (
  options?: Omit<
    UseMutationOptions<Order, unknown, Order, unknown>,
    'mutationFn'
  >,
) => {
  const mutation = useMutation(postOrder, {
    ...options,
  })

  return mutation
}

export default usePostOrder
