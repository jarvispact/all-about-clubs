import { useApi } from '../../api-context';
import { getClubDetails } from './get-club-details';
import { getClubList } from './get-club-list';

export const useClubApi = () => {
    const { apiClient } = useApi();
    return {
        getList: getClubList(apiClient),
        getDetails: getClubDetails(apiClient),
    };
};
