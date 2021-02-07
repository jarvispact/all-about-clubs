import React, { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AppBar from '../components/app-bar';
import { ErrorIndicator } from '../components/error-indicator';
import { LoadinIndicator } from '../components/loading-indicator';
import { NotFound } from '../components/not-found';
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

    if (status === 'loading' || result === null) return <LoadinIndicator />;
    if (status === 'error') return <ErrorIndicator error={(result as any) as Error} />;
    if (result === undefined) return <NotFound />;

    return (
        <>
            <AppBar title={result.name} onBackClick={handleBackClick} />
            <ClubDetailView club={result} />
        </>
    );
};

export default ClubDetails;
