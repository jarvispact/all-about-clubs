import React, { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AppBar from '../components/app-bar';
import DataLoader from '../components/data-loader';
import { NotFound } from '../components/not-found';
import { ClubDetailView } from '../domain/clubs/components/club-detail-view';
import { useClubApi } from '../domain/clubs/repository/use-club-api';

type DetailParams = {
    id: string;
};

const ClubDetails = () => {
    const { id } = useParams<DetailParams>();
    const history = useHistory();
    const Club = useClubApi();

    const handleBackClick = useCallback(() => history.push('/clubs'), []);

    return (
        <DataLoader fetchData={() => Club.getDetails(id)} dependency={[id]}>
            {(club) =>
                club ? (
                    <>
                        <AppBar title={club.name} onBackClick={handleBackClick} />
                        <ClubDetailView club={club} />
                    </>
                ) : (
                    <NotFound />
                )
            }
        </DataLoader>
    );
};

export default ClubDetails;
