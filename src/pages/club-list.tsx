import React, { useCallback, useState } from 'react';
import AppBar from '../components/app-bar';
import { ClubListItem } from '../domain/clubs/components/club-list-item';
import { ClubList as List } from '../domain/clubs/components/club-list';
import { ClubListViewModel } from '../domain/clubs/types';
import { useClubList } from '../domain/clubs/use-club-list';
import { styled } from '../styled';

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
    const [sortDirection, setSortDirection] = useState<SortDirection>('name-ascending');

    const toggleSortDirection = useCallback(() => {
        setSortDirection((prev) => (prev === 'value-descending' ? 'name-ascending' : 'value-descending'));
    }, [sortDirection]);

    if (status === 'loading') return <div>loading...</div>;
    if (status === 'error') return <div>error {JSON.stringify({ result })}</div>;
    if (!result) return <div>loading...</div>;

    return (
        <>
            <AppBar title="all about clubs" onBackClick={() => {}} onSortClick={toggleSortDirection} />
            <PageContent>
                <List>
                    {(result as Array<ClubListViewModel>).sort(sortFn(sortDirection)).map((item) => (
                        <ClubListItem key={item.id} item={item} />
                    ))}
                </List>
            </PageContent>
        </>
    );
};

export default ClubList;
