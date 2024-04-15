
import getStorageValue from 'helpers/getStorageValue'

interface UseLocalStorageReturnType<T> {
  voucherDataFromStorage: T | null
  putVoucherDataToStorage: (percentage: T) => void
  removeVoucherDataFromStorage: (voucherDataList: T[]) => void
}

const useVoucherFromStorage = <T>(
  key: string,
  defaultValue: T,
): UseLocalStorageReturnType<T> => {
  const voucherDataFromStorage = getStorageValue<T>(key, defaultValue)

  const putVoucherDataToStorage = (percentage: T) => {
    localStorage.setItem(key, JSON.stringify(percentage))
  }

  const removeVoucherDataFromStorage = (voucherDataList: T[]) => {
    voucherDataList.forEach((voucherData) => {
      const itemString = JSON.stringify(voucherData)
      localStorage.removeItem(itemString)
    })
  }

  return {
    voucherDataFromStorage,
    putVoucherDataToStorage,
    removeVoucherDataFromStorage,
  }
}

export default useVoucherFromStorage