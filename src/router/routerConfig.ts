import Home from '../pages/Home'
import Product from '../pages/Product'
import Promotions from '../pages/Promotions'
import DeliveryInfo from '../pages/DeliveryInfo'
import About from '../pages/About'
import Contacts from '../pages/Contacts'

const ROUTER_CONFIG = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    name: 'Product',
    path: 'product/:id',
    component: Product,
    exact: true,
  },
  {
    name: 'Promotions',
    path: '/promotions',
    component: Promotions,
    exact: true,
  },
  {
    name: 'DeliveryInfo',
    path: '/delivery',
    component: DeliveryInfo,
    exact: true,
  },
  {
    name: 'About',
    path: '/about',
    component: About,
    exact: true,
  },
  {
    name: 'Contacts',
    path: '/contacts',
    component: Contacts,
    exact: true,
  },
]

export default ROUTER_CONFIG
