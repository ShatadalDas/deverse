function numToStrWithPrefixZero(num: number) {
  if (num >= 0 && num <= 9) {
    return "0" + num.toString();
  }
  return num.toString();
}
export default numToStrWithPrefixZero;
