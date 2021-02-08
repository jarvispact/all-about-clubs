import { ApiClient } from '../../api-context';
import { ClubServerResponse, ClubDetailViewModel } from '../types';

const mapResponseToViewModel = (response: ClubServerResponse): ClubDetailViewModel => response;

// ==================== LOADING

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// export const getClubDetails = (apiClient: ApiClient) => async (clubId: string) => {
//     await sleep(10000);
//     const result: Array<ClubServerResponse> = await apiClient.get('/clubs.json');
//     const club = result.find((club) => club.id === clubId);
//     return club ? mapResponseToViewModel(club) : club;
// };

// ==================== ERROR

// export const getClubDetails = (apiClient: ApiClient) => async (clubId: string) => {
//     throw new Error('Internal Server Error');
// };

// ==================== NORMAL

export const getClubDetails = (apiClient: ApiClient) => async (clubId: string) => {
    const result: Array<ClubServerResponse> = await apiClient.get('/clubs.json');
    const club = result.find((club) => club.id === clubId);
    return club ? mapResponseToViewModel(club) : club;
};
