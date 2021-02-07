import React from 'react';
import { styled } from '../styled';

type Props = {
    children: React.ReactNode;
};

const SVG = styled.svg`
    color: ${(props) => props.theme.color.white};
    width: ${(props) => props.theme.fontSize.xl};
    height: ${(props) => props.theme.fontSize.xl};

    @media (min-width: ${(props) => props.theme.breakpoint.m}) {
        width: ${(props) => props.theme.fontSize['2xl']};
        height: ${(props) => props.theme.fontSize['2xl']};
    }
`;

export const IconSvg = ({ children }: Props) => {
    return (
        <SVG xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {children}
        </SVG>
    );
};
