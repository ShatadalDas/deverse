export default function removeQueriesFromUrl(urlWithoutHttps: string) {
  return urlWithoutHttps.split("?")[0];
}
