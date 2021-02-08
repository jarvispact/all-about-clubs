import React, { useCallback } from 'react';
import AppBar from '../components/app-bar';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useLocalStorageState } from '../domain/use-local-storage-state';
import DataLoader from '../components/data-loader';
import { useClubApi } from '../domain/clubs/repository/use-club-api';
import { ClubListView } from '../domain/clubs/components/club-list-view';
import { SortDirection } from '../domain/clubs/types';

const ClubList = () => {
    const Club = useClubApi();
    const history = useHistory();
    const intl = useIntl();
    const [sortDirection, setSortDirection] = useLocalStorageState<SortDirection>('list-sort-direction', 'name-ascending');

    const handleItemClick = useCallback((id: string) => history.push(`/club/${id}`), []);

    const handleToggleSortDirection = useCallback(() => {
        setSortDirection((prev) => (prev === 'value-descending' ? 'name-ascending' : 'value-descending'));
    }, [sortDirection]);

    return (
        <DataLoader fetchData={() => Club.getList()} dependency={[]}>
            {(clubList) => (
                <>
                    <AppBar title={intl.formatMessage({ id: 'appTitle' })} onSortClick={handleToggleSortDirection} />
                    <ClubListView clubList={clubList} sortDirection={sortDirection} onItemClick={handleItemClick} />
                </>
            )}
        </DataLoader>
    );
};

export default ClubList;
