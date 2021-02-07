import { styled } from '../styled';

export const IconButton = styled.button<{ 'aria-label': string }>`
    background-color: transparent;
    border-style: none;
    cursor: pointer;
    transition: box-shadow 0.3s ease-in-out;
    padding-top: ${(props) => props.theme.spacing.s};
    padding-bottom: ${(props) => props.theme.spacing.xs};
    padding-left: ${(props) => props.theme.spacing.m};
    padding-right: ${(props) => props.theme.spacing.m};
    border-radius: ${(props) => props.theme.radii.m};

    &:hover {
        box-shadow: ${(props) => props.theme.boxShadow.iconButton};
    }
`;
