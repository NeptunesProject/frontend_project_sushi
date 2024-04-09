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

interface Order {
  
    toDateTime: number,
    clientInfo: {phoneNumber: string , name:  string}, 
    deliveryAddress: {clientAddress: string}, 
    comment: string,
    peopleCount: number,
    cartItems: { id : number, quantity : number}[],
    sticksCount: number,
    studySticksCount: number,
    deliveryType: DeliveryType,
    paymentType: PaymentType,
    statusType: "CREATED" | 'PROGRESS'
  
}

interface ChakraFactoryComponent {
  className?: string
  children?: ReactNode | ReactNode[]
}

type BasketTypes = 'basket' | 'delivery' | 'pay'

export enum PaymentType {
  cash = 'CASH',
  terminal = 'TERMINAL',
  online = 'ONLINE',
}
export enum DeliveryType {
  delivery = 'DELIVERY',
  pickup = 'PICKUP',
}

export type { Languages, Product, ChakraFactoryComponent, BasketTypes, Category, Order }
