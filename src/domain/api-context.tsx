import React, { useContext } from 'react';
import settings from '../settings';

const ApiContext = React.createContext({
    baseUrl: '/',
    apiClient: {
        get: (url: string) => fetch(url).then((r) => r.json()),
    },
});

type Props = {
    children: React.ReactNode;
};

const apiClient = {
    get: <T,>(url: string): Promise<T> => fetch(`${settings.apiBaseUrl}/${url}`).then((r) => r.json()),
};

export const ApiProvider = ({ children }: Props) => <ApiContext.Provider value={{ baseUrl: settings.apiBaseUrl, apiClient }}>{children}</ApiContext.Provider>;

export const useApi = () => useContext(ApiContext);
