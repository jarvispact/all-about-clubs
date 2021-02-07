import React from 'react';
import { styled } from '../../../styled';
import { ClubDetailViewModel } from '../types';

const Banner = styled.div`
    margin-top: 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 250px;
    background-color: ${(props) => props.theme.color.gray800};
    color: ${(props) => props.theme.color.gray100};

    @media (min-width: ${(props) => props.theme.breakpoint.m}) {
        margin-top: 60px;
        height: 350px;
    }
`;

const Image = styled.img<{ imageHeight: Array<string> }>`
    object-fit: contain;
    width: ${(props) => props.width};
    height: ${(props) => props.imageHeight[0]};

    @media (min-width: ${(props) => props.theme.breakpoint.m}) {
        height: ${(props) => props.imageHeight[1]};
    }
`;

const Country = styled.h3`
    position: absolute;
    left: 10px;
    bottom: 10px;
`;

const Description = styled.p`
    padding: ${(props) => props.theme.spacing.xl};
    font-size: ${(props) => props.theme.fontSize.s};

    @media (min-width: ${(props) => props.theme.breakpoint.m}) {
        font-size: ${(props) => props.theme.fontSize.m};
    }
`;

type Props = {
    club: ClubDetailViewModel;
};

export const ClubDetailView = ({ club }: Props) => {
    return (
        <>
            <Banner>
                <Image width="100%" imageHeight={['200px', '300px']} src={club.image} />
                <Country>{club.country}</Country>
            </Banner>
            <Description>
                Der Club <b>{club.name}</b> aus {club.country} hat einen Wert von {club.value} Millionen Euro.
            </Description>
            <Description>
                <b>{club.name}</b> konnte bislang {club.european_titles} Siege auf europäischer Ebene erreichen.
            </Description>
        </>
    );
};
