import { Product } from "types";

const getCartItems = (list: Product[]) => {
  return list.map((item) => ({
    id: item.id,
    quantity: item.count || 0,
  }))
}
export default getCartItems;