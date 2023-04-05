function calculate(data) {
  let { discount, products } = data;
  let beforeDiscount = 0;
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    beforeDiscount += products[i].price;
  }
  totalPrice = beforeDiscount * discount;
  return totalPrice;
}

const discountedPrice = calculate({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
});

console.log(discountedPrice);//105
