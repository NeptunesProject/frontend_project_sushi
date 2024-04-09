import axios from 'axios'
import { Category, Product, Order } from '../types'

const BASE_URL = import.meta.env.VITE_APP_MAIN_API

const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
})

const getProducts = async (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    apiClient
      .get('/products')
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const getProduct = async (id: string): Promise<Product> => {
  return new Promise((resolve, reject) => {
    apiClient
      .get(`/products/${id}`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const getCategories = async (): Promise<Category[]> => {
  return new Promise((resolve, reject) => {
    apiClient
      .get('/category')
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const addNewOrder = async (newOrder: Order): Promise<Order> => {
  return new Promise((resolve, reject) => {
    apiClient
      .post('/orders', newOrder)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export { getProducts, getCategories, getProduct, addNewOrder }
