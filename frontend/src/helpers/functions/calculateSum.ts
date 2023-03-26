type Price = {
  summerPrice: number;
  winterPrice: number;
};

export const calculateSum = (days: Date[], price: Price) => {
  let sum = 0;

  days.forEach((day, i) => {
    day.getMonth() > 4 && day.getMonth() < 9
      ? (sum += price.summerPrice)
      : (sum += price.winterPrice);
  });

  return sum;
};
