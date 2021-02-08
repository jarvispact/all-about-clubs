import { ApiClient } from '../../api-context';
import { ClubServerResponse, ClubDetailViewModel } from '../types';

const mapResponseToViewModel = (response: ClubServerResponse): ClubDetailViewModel => response;

export const getClubDetails = (apiClient: ApiClient) => async (clubId: string) => {
    const result: Array<ClubServerResponse> = await apiClient.get('/clubs.json');
    const club = result.find((club) => club.id === clubId);
    return club ? mapResponseToViewModel(club) : club;
};
