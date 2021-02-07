import React from 'react';
import { useClubList } from '../domain/clubs/use-club-list';

const ClubList = () => {
    const { status, result } = useClubList();
    if (status === 'loading') return <div>loading...</div>;
    if (status === 'error') return <div>error {JSON.stringify({ result })}</div>;
    return <div>ClubList</div>;
};

export default ClubList;
