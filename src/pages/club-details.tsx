import React from 'react';
import { useParams } from 'react-router-dom';
import { useClubDetails } from '../domain/clubs/use-club-details';

type DetailParams = {
    id: string;
};

const ClubDetails = () => {
    const { id } = useParams<DetailParams>();
    const { status, result } = useClubDetails(id);
    if (status === 'loading') return <div>loading...</div>;
    if (status === 'error') return <div>error {JSON.stringify({ result })}</div>;
    if (result === undefined) return <div>404</div>;
    return <pre>{JSON.stringify(result, null, 2)}</pre>;
};

export default ClubDetails;
