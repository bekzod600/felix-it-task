export const formatNumber = (num: number) => {
  // regex
  const regex = /(\d{1,3})(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regex, "$1 ");
};
