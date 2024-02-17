export default function removeHttpsFromUrl(str: `https://${string}`) {
  return str.replace("https://", "");
}
