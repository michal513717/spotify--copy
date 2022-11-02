import { useState, useEffect } from "react";

export function useDebounce<T>(delay:number, value:T){
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounceValue(value);
        }, delay)

        return () => clearTimeout(timeoutId);
    }, [value]);

    return debounceValue;
}