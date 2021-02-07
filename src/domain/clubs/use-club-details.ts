import { useApi } from '../api-context';
import { useFetchReducer } from '../use-fetch-reducer';
import { ClubServerResponse, ClubDetailViewModel } from './types';

const mapResponseToViewModel = (response: ClubServerResponse): ClubDetailViewModel => response;

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// const loading = (apiClient: any) => sleep(15000).then(() => apiClient.get('/clubs.json'));

// const error = () =>
//     sleep(100).then(() => {
//         throw new Error('Internal Server Error');
//     });

export const useClubDetails = (id: string) => {
    const { apiClient } = useApi();
    // uncomment to see the loading indicator :)
    // const { status, result } = useFetchReducer<Array<ClubServerResponse>>(() => loading(apiClient), [id]);

    // uncomment to that the error case is handled. not my best design tho ;)
    // const { status, result } = useFetchReducer<Array<ClubServerResponse>>(error, [id]);
    const { status, result } = useFetchReducer<Array<ClubServerResponse>>(() => apiClient.get('/clubs.json'), [id]);

    const club = status === 'success' ? (result as Array<ClubServerResponse>).find((club) => club.id === id) : result;

    return {
        status,
        result: club === undefined ? club : mapResponseToViewModel(club as ClubServerResponse),
    };
};
