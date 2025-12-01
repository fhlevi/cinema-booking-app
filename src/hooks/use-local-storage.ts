import { useState, useCallback } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

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
