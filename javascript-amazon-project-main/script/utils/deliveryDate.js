export function deliverDate(today) {
  dateString = today
    .add(deliveryOption.deliveryDays, "days")
    .format("dddd, MMMM D");

  return dateString;
}
