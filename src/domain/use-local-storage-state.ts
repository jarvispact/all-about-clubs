import { useEffect, useState } from 'react';

export const useLocalStorageState = <T extends string>(localStorageKey: string, defaultState: T) => {
    const [state, setState] = useState<T>(() => (localStorage.getItem(localStorageKey) as T) || defaultState);

    useEffect(() => {
        localStorage.setItem(localStorageKey, state);
    }, [state]);

    return [state, setState] as const;
};
