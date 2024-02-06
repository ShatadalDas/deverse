export default function formatNumberAbbreviated(num: number): string {
  if (num < 1000) {
    return num.toString();
  }

  const units = ["", "k", "m", "b", "t"]; // Include an empty string for numbers < 1000
  const unitIndex = Math.floor(Math.log10(num) / 3);
  const formattedNum = Math.floor((num / Math.pow(1000, unitIndex)) * 10) / 10;

  return formattedNum.toString() + units[unitIndex];
}
