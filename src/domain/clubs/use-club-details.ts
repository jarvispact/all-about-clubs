import { useApi } from '../api-context';
import { useFetchReducer } from '../use-fetch-reducer';
import { ClubServerResponse, ClubDetailViewModel } from './types';

const mapResponseToViewModel = (response: ClubServerResponse): ClubDetailViewModel => response;

export const useClubDetails = (id: string) => {
    const { apiClient } = useApi();
    const { status, result } = useFetchReducer<Array<ClubServerResponse>>(() => apiClient.get('/clubs.json'), [id]);

    const club = status === 'success' ? (result as Array<ClubServerResponse>).find((club) => club.id === id) : result;

    return {
        status,
        result: club === undefined ? club : mapResponseToViewModel(club as ClubServerResponse),
    };
};
