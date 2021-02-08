import { ApiClient } from '../../api-context';
import { ClubServerResponse, ClubListViewModel } from '../types';

const mapResponseToViewModel = (response: ClubServerResponse): ClubListViewModel => ({
    id: response.id,
    name: response.name,
    country: response.country,
    value: response.value,
    image: response.image,
});

export const getClubList = (apiClient: ApiClient) => async () => {
    const result: Array<ClubServerResponse> = await apiClient.get('/clubs.json');
    return result.map(mapResponseToViewModel);
};
