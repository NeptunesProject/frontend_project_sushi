
import { useState } from 'react'
import useVoucher from './useVoucher'
import useVoucherFromStorage from './useVoucherFromStorage'
import { Voucher } from 'types'

interface VoucherMutationReturnType {
  voucher: Voucher
  handleVoucher: () => Promise<void>
  isExpired: boolean
  isUnknown: boolean
  isValid: boolean
}

const useVoucherMutation = (voucher: Voucher): VoucherMutationReturnType => {
  const voucherMutation = useVoucher()
  const { putVoucherDataToStorage: putVoucherCodeToStorage } =
    useVoucherFromStorage('voucherCode', '')

  const { putVoucherDataToStorage: putDiscountPercentageToStorage } =
    useVoucherFromStorage('discountPercentage', 0)

  const { putVoucherDataToStorage: putIsValidVoucherToStorage } =
    useVoucherFromStorage('isVoucherValid', false)

  const [isUnknown, setIsUnknown] = useState(false)
  const [isExpired, setIsExpired] = useState(false)
  const [isValid, setIsValid] = useState(false)

  const handleVoucher = async () => {
    try {
      const data = await voucherMutation.mutateAsync(voucher)

      if (data && data.code) {
        putDiscountPercentageToStorage(data.discountPercentage)
        putVoucherCodeToStorage(data.code)
        putIsValidVoucherToStorage(true)
        setIsValid(true)
      }

      if (data.status === 404) {
        setIsUnknown(true)
      }

      if (data.status === 410) {
        setIsExpired(true)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return {
    voucher,
    handleVoucher,
    isExpired,
    isUnknown,
    isValid,
  }
}

export default useVoucherMutation