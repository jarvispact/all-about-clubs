import React from 'react';
import { useParams } from 'react-router-dom';

type DetailParams = {
    id: string;
};

const ClubDetails = () => {
    const { id } = useParams<DetailParams>();
    return <div>ClubDetails {id}</div>;
};

export default ClubDetails;
