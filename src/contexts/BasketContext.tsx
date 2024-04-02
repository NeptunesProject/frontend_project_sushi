import { Product } from '../types'
import {
  createContext, ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

interface ProductObj {
  count: number
  product: Product
}

interface BasketContextState {
  products: (Product & { count: number })[]
  totalWeight: number
  totalPrice: number
  productsCount: number
}

interface BasketDispatchContextState {
  addProduct: (product: Product, count?: number) => void
  removeProduct: (product: Product) => void
  deleteProduct: (product: Product) => void
  isProductAdded: (product: Product) => boolean
}

const BasketContext = createContext<BasketContextState>(
  {} as BasketContextState,
)

const ProductsDispatchContext = createContext<BasketDispatchContextState>(
  {} as BasketDispatchContextState,
)

const useBasketContext = () => {
  const context = useContext(BasketContext)

  if (!Object.keys(context).length) {
    throw new Error('useProductsContext must be used within a ProductsProvider')
  }

  return context
}

const useBasketDispatchContext = () => {
  const context = useContext(ProductsDispatchContext)
  if (!Object.keys(context).length) {
    throw new Error(
      'useProductsDispatchContext must be used within a ProductsProvider',
    )
  }
  return context
}
const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProducts, setSelectedProducts] = useState<
    Record<number, ProductObj>
  >(
    localStorage.getItem('selectedProducts')
      ? JSON.parse(localStorage.getItem('selectedProducts') as string)
      : {},
  )
  useEffect(() => {
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts))
  }, [selectedProducts])

  const addProduct = useCallback(
    (product: Product, count?: number) => {
      const delta = count ? count : 1
      if (selectedProducts[product.id]) {
        setSelectedProducts((prevState) => {
          return {
            ...prevState,
            [product.id]: {
              ...prevState[product.id],
              count: prevState[product.id].count + delta,
            },
          }
        })
      } else {
        setSelectedProducts((prevState) => {
          return {
            ...prevState,
            [product.id]: {
              count: delta,
              product,
            },
          }
        })
      }
    },
    [selectedProducts],
  )

  const deleteProduct = useCallback((product: Product) => {
    setSelectedProducts((prevState) => {
      const newState = { ...prevState }
      delete newState[product.id]
      return newState
    })
  }, [])

  const removeProduct = useCallback(
    (product: Product) => {
      if (selectedProducts[product.id]?.count > 1) {
        setSelectedProducts((prevState) => {
          return {
            ...prevState,
            [product.id]: {
              ...prevState[product.id],
              count: prevState[product.id].count - 1,
            },
          }
        })
      } else {
        deleteProduct(product)
      }
    },
    [deleteProduct, selectedProducts],
  )

  const isProductAdded = useCallback(
    (product: Product) => {
      return Boolean(selectedProducts[product.id])
    },
    [selectedProducts],
  )

  const totalWeight = useMemo(() => {
    return Object.values(selectedProducts).reduce((acc, item) => {
      return acc + item.product.weight * item.count
    }, 0)
  }, [selectedProducts])

  const totalPrice = useMemo(() => {
    return Object.values(selectedProducts).reduce((acc, item) => {
      return acc + item.product.price * item.count
    }, 0)
  }, [selectedProducts])

  const contextValue = useMemo(
    () => ({
      products: Object.values(selectedProducts).map((item) => ({
        ...item.product,
        count: item.count,
      })),

      totalWeight,
      totalPrice,
      productsCount: Object.values(selectedProducts).length,
    }),
    [selectedProducts],
  )

  const contextDispatchValue = useMemo(
    () => ({
      addProduct,
      removeProduct,
      deleteProduct,
      isProductAdded,
    }),
    [addProduct, deleteProduct, removeProduct, isProductAdded],
  )

  return (
    <BasketContext.Provider value={contextValue}>
      <ProductsDispatchContext.Provider value={contextDispatchValue}>
        {children}
      </ProductsDispatchContext.Provider>
    </BasketContext.Provider>
  )
}

export { useBasketContext, useBasketDispatchContext, BasketProvider }
