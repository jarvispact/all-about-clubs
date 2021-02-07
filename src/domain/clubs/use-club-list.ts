import { useApi } from '../api-context';
import { useFetchReducer } from '../use-fetch-reducer';
import { ClubServerResponse, ClubListViewModel } from './types';

const mapResponseToViewModel = (response: ClubServerResponse): ClubListViewModel => ({
    id: response.id,
    name: response.name,
    country: response.country,
    value: response.value,
});

export const useClubList = () => {
    const { apiClient } = useApi();
    const { status, result } = useFetchReducer<Array<ClubServerResponse>>(() => apiClient.get('/clubs.json'));
    return {
        status,
        result: status === 'success' ? (result as Array<ClubServerResponse>).map(mapResponseToViewModel) : result,
    };
};
