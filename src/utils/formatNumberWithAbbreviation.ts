export default function formatNumberWithAbbreviation(num: number): string;
export default function formatNumberWithAbbreviation(
  num: number,
  letterNeeded: false
): string[];

export default function formatNumberWithAbbreviation(
  num: number,
  letterNeeded: boolean = true
) {
  const units = ["", "k", "m", "b", "t"]; // Include an empty string for numbers < 1000
  const unitIndex = Math.floor(Math.log10(num) / 3);
  const formattedNum = Math.floor((num / Math.pow(1000, unitIndex)) * 10) / 10;
  if (letterNeeded) return formattedNum.toString() + units[unitIndex];
  else return [formattedNum.toString(), units[unitIndex]];
}
