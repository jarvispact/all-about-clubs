/* eslint-disable react/display-name */
import React from 'react';
import { useIntl } from 'react-intl';
import { ClubListViewModel, SortDirection } from '../types';
import { ClubListItem } from './club-list-item';
import { ClubList, EmptyList, PageContent } from './styled';

type Props = {
    clubList: Array<ClubListViewModel>;
    sortDirection: SortDirection;
    onItemClick: (id: string) => void;
};

const sortFn = (sortDirection: SortDirection) => (a: ClubListViewModel, b: ClubListViewModel) => {
    switch (sortDirection) {
        case 'value-descending':
            return a.value < b.value ? 1 : -1;
        default:
            return a.name.localeCompare(b.name);
    }
};

export const ClubListView = ({ clubList, sortDirection, onItemClick }: Props) => {
    const intl = useIntl();

    return (
        <>
            <PageContent>
                <ClubList>
                    {clubList.length ? (
                        clubList.sort(sortFn(sortDirection)).map((item) => <ClubListItem key={item.id} item={item} onItemClick={() => onItemClick(item.id)} />)
                    ) : (
                        <EmptyList>{intl.formatMessage({ id: 'emptyClublist' })}</EmptyList>
                    )}
                </ClubList>
            </PageContent>
        </>
    );
};
