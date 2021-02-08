/* eslint-disable react/display-name */
import React from 'react';
import { useIntl } from 'react-intl';
import { ClubDetailViewModel } from '../types';
import { Banner, CountryLabel, DetailDescription, DetailImage } from './styled';

type Props = {
    club: ClubDetailViewModel;
};

export const ClubDetailView = ({ club }: Props) => {
    const intl = useIntl();

    return (
        <>
            <Banner>
                <DetailImage width="100%" imageHeight={['200px', '300px']} src={club.image} />
                <CountryLabel>{club.country}</CountryLabel>
            </Banner>
            <DetailDescription>{intl.formatMessage({ id: 'clubValueInfo' }, { ...club, b: (chunk) => <b>{chunk}</b> })}</DetailDescription>
            <DetailDescription>
                {intl.formatMessage({ id: 'clubTitleInfo' }, { name: club.name, titles: club.european_titles, b: (chunk) => <b>{chunk}</b> })}
            </DetailDescription>
        </>
    );
};
