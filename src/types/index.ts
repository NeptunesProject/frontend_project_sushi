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
  count?: number
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

type BasketTypes = 'basket' | 'delivery' | 'confirmation'| 'paymentInfo' | 'pay'

interface ClientInfo {
  phoneNumber: string
  name: string
}

interface DeliveryAddress {
  clientAddress: string
}

interface CartItem {
  id: number
  quantity: number
}

export enum PaymentType {
  cash = 'CASH',
  terminal = 'TERMINAL',
  online = 'ONLINE',
}
export enum DeliveryType {
  delivery = 'DELIVERY',
  pickup = 'PICKUP',
}

interface Order {
  id?: number
  toDateTime: string
  clientInfo: ClientInfo
  deliveryAddress: DeliveryAddress
  comment: string
  peopleCount: number
  cartItems: CartItem[]
  sticksCount: number
  studySticksCount: number
  deliveryType: DeliveryType
  paymentType: PaymentType
}

export type {
  Languages,
  Product,
  ChakraFactoryComponent,
  BasketTypes,
  Category,
  Order,
}
