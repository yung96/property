export const formatPrice = (price) => {
  if (typeof price === 'string') return price;
  
  if (price >= 1000000000) {
    return `${(price / 1000000000).toFixed(1)} млрд руб.`;
  }
  
  if (price >= 1000000) {
    return `${(price / 1000000).toFixed(0)} млн руб.`;
  }
  
  return `${price.toLocaleString('ru-RU')} руб.`;
};

