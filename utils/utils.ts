export const formatPrice = (price: number, isYearly = false) => {
  const formattedPrice = isYearly ? price * 10 : price;
  const frequency = isYearly ? "/yr" : "/mo";
  return `$${formattedPrice}${frequency}`;
};
