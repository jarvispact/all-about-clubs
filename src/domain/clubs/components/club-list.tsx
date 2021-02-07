import { styled } from '../../../styled';

export const ClubList = styled.ul`
    margin-top: 20px;

    > li {
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: ${(props) => props.theme.color.gray200};
    }

    > li:last-child {
        border-bottom-style: none;
    }
`;
