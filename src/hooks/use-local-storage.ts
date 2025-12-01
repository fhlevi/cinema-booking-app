import { useState, useCallback, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
    const [storedValue, setStoredValue] = useState<T>(initialValue);

    useEffect(() => {
        try {
            const item = window.localStorage.getItem(key);
            if (item) {
                setStoredValue(JSON.parse(item));
            }
        } catch (error) {
            console.log(error);
        }
    }, [key]);

    const setValue = useCallback((value: T | ((val: T) => T)) => {
        setStoredValue(currentStoredValue => {
            const valueToStore = value instanceof Function ? value(currentStoredValue) : value;
            try {
                if (typeof window !== 'undefined') {
                    window.localStorage.setItem(key, JSON.stringify(valueToStore));
                }
            } catch (e) {
                console.log(e);
            }
            return valueToStore;
        });
    }, [key]);

    return [storedValue, setValue];
}

export default useLocalStorage;
