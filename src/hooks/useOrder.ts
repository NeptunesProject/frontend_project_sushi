import { addNewOrder } from '../api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { Order } from '../types'

const useOrder = (
  newOrder: Order,
  options?: Omit<
    UseQueryOptions<Order, unknown, Order, string[]>,
    'initialData'
  >,
) => {
  const {
    data: approvedOrder
  } = useQuery(['orders'], () => addNewOrder(newOrder), { ...options })

  return approvedOrder;
}

export default useOrder;