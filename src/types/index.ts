import { ReactNode } from 'react'

enum Languages {
  en = 'EN',
  pl = 'PL',
  ua = 'UA',
  ru = 'RU',
}

interface Product {
  id: number
  name: string
  nameRu: string
  nameEn: string
  nameUa: string
  price: number
  categoryId: number
  allergensId: number
  weight: number
  url: string
  img: string
  status: number
  cityId: number
  size: number
  sale: number
  iikoId: string
  cartCount: number
  sort: number
  box: number
}

interface Category {
  id: number
  name: string
  nameUa: string
  nameRu: string
  nameEn: string
  url: string
  img: string
}

interface ChakraFactoryComponent {
  className?: string
  children?: ReactNode | ReactNode[]
}

type BasketTypes = 'basket' | 'delivery' | 'pay'

export type { Languages, Product, ChakraFactoryComponent, BasketTypes, Category }
