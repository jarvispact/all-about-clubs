import { styled } from '../styled';

export const Fullpage = styled.div`
    background-color: ${(props) => props.theme.color.gray200};
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
