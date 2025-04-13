import { useCallback, useEffect, useState } from "react";

export default function useDebounce(value: string, timeout?: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);
   useEffect(() => {
      const getData = setTimeout(() => {
         setDebouncedValue(value)
      }, timeout ?? 300);

      return () => clearTimeout(getData);
   }, [value, timeout]);

   return debouncedValue;
}
