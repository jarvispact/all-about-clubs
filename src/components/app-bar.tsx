import React from 'react';
import { SortIcon } from './sort-icon';
import { styled } from '../styled';
import { IconButton } from './icon-button';
import { BackIcon } from './back-icon';

type Props = {
    title: string;
    onBackClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onSortClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const StyledAppBar = styled.header`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${(props) => props.theme.spacing.l};
    z-index: 20;
    background-color: ${(props) => props.theme.color.primary500};
    color: ${(props) => props.theme.color.white};
    box-shadow: ${(props) => props.theme.boxShadow.appbar};

    @media (min-width: ${(props) => props.theme.breakpoint.m}) {
        height: 65px;
    }
`;

const Start = styled.div`
    flex: 1 1 auto;
`;

const End = styled.div`
    flex: 0 0 50px;
`;

const Title = styled.h1`
    display: inline-block;
    vertical-align: 10%;
    font-size: ${(props) => props.theme.fontSize.m};
    margin-left: ${(props) => props.theme.spacing.l};

    @media (min-width: ${(props) => props.theme.breakpoint.m}) {
        font-size: ${(props) => props.theme.fontSize['2xl']};
    }
`;

const AppBar = ({ title, onBackClick, onSortClick }: Props) => {
    return (
        <StyledAppBar>
            <Start>
                {onBackClick && (
                    <IconButton aria-label="back to list" onClick={onBackClick}>
                        <BackIcon />
                    </IconButton>
                )}
                <Title>{title}</Title>
            </Start>
            <End>
                {onSortClick && (
                    <IconButton aria-label="sort list" onClick={onSortClick}>
                        <SortIcon />
                    </IconButton>
                )}
            </End>
        </StyledAppBar>
    );
};

export default AppBar;
