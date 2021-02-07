import { useEffect, useReducer } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

type State<T> = {
    status: Status;
    result: null | T | Error;
};

type Action<T> = { type: 'start' } | { type: 'success'; payload: T } | { type: 'error'; payload: Error };

type Reducer<T> = (s: State<T>, a: Action<T>) => State<T>;

const reducer = <T>(state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
        case 'start':
            return { status: 'loading', result: null };
        case 'success':
            return { status: 'success', result: action.payload };
        case 'error':
            return { status: 'error', result: action.payload };
        default:
            throw new Error();
    }
};

export const useFetchReducer = <T>(asyncFn: () => Promise<T>, dependency?: Array<unknown>) => {
    const [state, dispatch] = useReducer<Reducer<T>>(reducer, { status: 'idle' as Status, result: null });

    useEffect(() => {
        dispatch({ type: 'start' });
        asyncFn()
            .then((response) => dispatch({ type: 'success', payload: response }))
            .catch((err) => dispatch({ type: 'error', payload: err }));
    }, dependency || []);

    return state;
};
