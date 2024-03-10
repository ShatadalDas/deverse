"use client"

import { useEffect, useState } from "react";

function useDefinedLocalStorage<CallbackReturnType>(
  callback: () => CallbackReturnType
) {
  const [defined, setDefined] = useState(false);
  const [returnedValue, setReturnedValue] = useState<CallbackReturnType>();

  useEffect(() => {
    if (typeof localStorage !== undefined) {
      setReturnedValue(callback());
      setDefined(true);
    }
  }, [typeof localStorage]);

  return { defined, returnedValue };
}
export default useDefinedLocalStorage;
