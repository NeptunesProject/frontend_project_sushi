import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { Voucher } from '../types'
import { validateVoucher } from 'api'


const useVoucher = (
  options?: Omit<
    UseMutationOptions<Voucher, unknown, Voucher, unknown>,
    'mutationFn'
  >,
) => {
  const mutation = useMutation(validateVoucher, {
    ...options,
  })

  return mutation
}

export default useVoucher