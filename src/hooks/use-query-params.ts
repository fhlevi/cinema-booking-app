import { useState, useEffect } from 'react';

function useQueryParam(paramName: string): string | null {
    const [paramValue, setParamValue] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const queryParams = new URLSearchParams(window.location.search);
            const value = queryParams.get(paramName);
            setParamValue(value);
        }
    }, [paramName]);

    return paramValue;
}

export default useQueryParam;
