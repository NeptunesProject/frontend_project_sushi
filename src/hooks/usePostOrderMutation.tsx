import { useBasketDispatchContext } from 'contexts/BasketContext'
import { BasketTypes, Order } from 'types'
import usePostOrder from './usePostOrder'
import { useAdditionalProductsContext } from 'contexts/BasketContext'

interface Props {
  orderData: Order
  setOrderNumber: React.Dispatch<React.SetStateAction<number>>
  setSelectedBasketType: React.Dispatch<React.SetStateAction<BasketTypes>>
}

const usePostOrderMutation = ({orderData, setOrderNumber, setSelectedBasketType}: Props) => {
  const { clearAll } = useBasketDispatchContext()
  const postOrderMutation = usePostOrder()
  const { setAdditionalProductsCount } = useAdditionalProductsContext()
  
  const handleSubmitOrder = () => {
    postOrderMutation
      .mutateAsync(orderData)
      .then((data) => {
        if (data && typeof data.id === 'number') {
          setOrderNumber(data.id)
          clearAll()
          localStorage.removeItem('discountPercentage')
          localStorage.removeItem('voucherCode')
          localStorage.removeItem('isVoucherValid')
          setAdditionalProductsCount('personCount',  1)
          setAdditionalProductsCount('sticks',  0)
          setSelectedBasketType('confirmation')
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return {handleSubmitOrder}
}

export default usePostOrderMutation
