export function formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}

function UpdatedDate(days) {
  const today = dayjs();
  const deliveryDate = today.add(days, "day");
  deliveryDate.format("DDDD, MMMM D");
  console.log(deliveryDate);
}
