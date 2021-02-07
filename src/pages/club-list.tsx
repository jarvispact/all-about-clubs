import React, { useCallback, useState } from 'react';
import AppBar from '../components/app-bar';
import { ClubListItem } from '../domain/clubs/components/club-list-item';
import { ClubList as List } from '../domain/clubs/components/club-list';
import { ClubListViewModel } from '../domain/clubs/types';
import { useClubList } from '../domain/clubs/use-club-list';
import { styled } from '../styled';
import { useHistory } from 'react-router-dom';

const PageContent = styled.div`
    margin-top: 60px;

    @media (min-width: ${(props) => props.theme.breakpoint.m}) {
        margin-top: 80px;
    }
`;

type SortDirection = 'name-ascending' | 'value-descending';

const sortFn = (sortDirection: SortDirection) => (a: ClubListViewModel, b: ClubListViewModel) => {
    switch (sortDirection) {
        case 'value-descending':
            return a.value < b.value ? -1 : 1;
        default:
            return a.name.localeCompare(b.name);
    }
};

const ClubList = () => {
    const { status, result } = useClubList();
    const history = useHistory();
    const [sortDirection, setSortDirection] = useState<SortDirection>('name-ascending');

    const handleItemClick = useCallback((id: string) => history.push(`/club/${id}`), []);

    const handleToggleSortDirection = useCallback(() => {
        setSortDirection((prev) => (prev === 'value-descending' ? 'name-ascending' : 'value-descending'));
    }, [sortDirection]);

    if (status === 'loading' || result === null) return <div>loading...</div>;
    if (status === 'error') return <div>error {JSON.stringify({ result })}</div>;

    return (
        <>
            <AppBar title="all about clubs" onSortClick={handleToggleSortDirection} />
            <PageContent>
                <List>
                    {(result as Array<ClubListViewModel>).sort(sortFn(sortDirection)).map((item) => (
                        <ClubListItem key={item.id} item={item} onItemClick={handleItemClick} />
                    ))}
                </List>
            </PageContent>
        </>
    );
};

export default ClubList;
