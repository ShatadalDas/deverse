import removeHttpsFromUrl from "./removeHttpsFromUrl";
import removeQueriesFromUrl from "./removeQueriesFromUrl";

export default function urlToArray(url: `https://${string}`) {
  const cleanUrl = removeQueriesFromUrl(removeHttpsFromUrl(url));

  return cleanUrl.split("/");
}
