import React from 'react';
import AppBar from '../components/app-bar';
import { useClubList } from '../domain/clubs/use-club-list';

const ClubList = () => {
    const { status, result } = useClubList();
    if (status === 'loading') return <div>loading...</div>;
    if (status === 'error') return <div>error {JSON.stringify({ result })}</div>;
    return (
        <>
            <AppBar title="all about clubs" onBackClick={() => {}} onSortClick={() => {}} />
            <div>content</div>
        </>
    );
};

export default ClubList;
