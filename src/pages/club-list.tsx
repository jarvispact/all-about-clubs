import React, { useCallback, useState } from 'react';
import AppBar from '../components/app-bar';
import { ClubListItem } from '../domain/clubs/components/club-list-item';
import { ClubList as List } from '../domain/clubs/components/club-list';
import { ClubListViewModel } from '../domain/clubs/types';
import { useClubList } from '../domain/clubs/use-club-list';
import { styled } from '../styled';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { LoadinIndicator } from '../components/loading-indicator';
import { ErrorIndicator } from '../components/error-indicator';
import { useLocalStorageState } from '../domain/use-local-storage-state';

const PageContent = styled.div`
    margin-top: 60px;

    @media (min-width: ${(props) => props.theme.breakpoint.m}) {
        margin-top: 80px;
    }
`;

const EmptyList = styled.div`
    padding: ${(props) => props.theme.spacing.xl};
`;

type SortDirection = 'name-ascending' | 'value-descending';

const sortFn = (sortDirection: SortDirection) => (a: ClubListViewModel, b: ClubListViewModel) => {
    switch (sortDirection) {
        case 'value-descending':
            return a.value < b.value ? 1 : -1;
        default:
            return a.name.localeCompare(b.name);
    }
};

const ClubList = () => {
    const { status, result } = useClubList();
    const history = useHistory();
    const intl = useIntl();
    const [sortDirection, setSortDirection] = useLocalStorageState<SortDirection>('list-sort-direction', 'name-ascending');

    const handleItemClick = useCallback((id: string) => history.push(`/club/${id}`), []);

    const handleToggleSortDirection = useCallback(() => {
        setSortDirection((prev) => (prev === 'value-descending' ? 'name-ascending' : 'value-descending'));
    }, [sortDirection]);

    if (status === 'loading' || result === null) return <LoadinIndicator />;
    if (status === 'error') return <ErrorIndicator error={(result as any) as Error} />;

    // uncomment to see that the empty list case is handled :)
    // const clubList: Array<ClubListViewModel> = [];
    const clubList = result as Array<ClubListViewModel>;

    return (
        <>
            <AppBar title={intl.formatMessage({ id: 'appTitle' })} onSortClick={handleToggleSortDirection} />
            <PageContent>
                <List>
                    {clubList.length ? (
                        clubList.sort(sortFn(sortDirection)).map((item) => <ClubListItem key={item.id} item={item} onItemClick={handleItemClick} />)
                    ) : (
                        <EmptyList>{intl.formatMessage({ id: 'emptyClublist' })}</EmptyList>
                    )}
                </List>
            </PageContent>
        </>
    );
};

export default ClubList;
