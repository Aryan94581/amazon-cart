import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";

export function randerPaymentSummary() {
  let productPriceCents = 0;
  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;
  });
  console.log(productPriceCents);
}
