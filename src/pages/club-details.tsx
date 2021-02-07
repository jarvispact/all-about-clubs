import React, { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AppBar from '../components/app-bar';
import { ClubDetailView } from '../domain/clubs/components/club-detail-view';
import { useClubDetails } from '../domain/clubs/use-club-details';

type DetailParams = {
    id: string;
};

const ClubDetails = () => {
    const { id } = useParams<DetailParams>();
    const history = useHistory();
    const { status, result } = useClubDetails(id);

    const handleBackClick = useCallback(() => history.push('/clubs'), []);

    if (status === 'loading' || result === null) return <div>loading...</div>;
    if (status === 'error') return <div>error {JSON.stringify({ result })}</div>;
    if (result === undefined) return <div>404</div>;

    return (
        <>
            <AppBar title={result.name} onBackClick={handleBackClick} />
            <ClubDetailView club={result} />
        </>
    );
};

export default ClubDetails;
