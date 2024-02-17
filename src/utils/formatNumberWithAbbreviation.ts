export default function formatNumberWithAbbreviation(num: number): string;
export default function formatNumberWithAbbreviation(
  num: number,
  unitConcat: false
): string[];

export default function formatNumberWithAbbreviation(
  num: number,
  unitConcat: boolean = true
) {
  const units = ["", "k", "m", "b", "t"];
  const unitIndex = Math.floor(Math.log10(num) / 3);
  const formattedNum = Math.floor((num / Math.pow(1000, unitIndex)) * 10) / 10;

  if (unitConcat) {
    return formattedNum.toString() + units[unitIndex];
  }

  return [formattedNum.toString(), units[unitIndex]];
}
