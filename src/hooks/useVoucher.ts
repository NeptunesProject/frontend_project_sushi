import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { Voucher } from '../types'
import { validateVaucher } from 'api'

const useVoucher = (
  options?: Omit<
    UseMutationOptions<Voucher, unknown, Voucher, unknown>,
    'mutationFn'
  >,
) => {
  const mutation = useMutation(validateVaucher, {
    ...options,
  })

  return mutation
}

export default useVoucher