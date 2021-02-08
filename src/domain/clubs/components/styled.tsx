import { styled } from '../../../styled';
import { theme } from '../../../theme';

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

export const PageContent = styled.div`
    margin-top: 60px;

    @media (min-width: ${(props) => props.theme.breakpoint.m}) {
        margin-top: 80px;
    }
`;

export const EmptyList = styled.div`
    padding: ${(props) => props.theme.spacing.xl};
`;

export const Banner = styled.div`
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

export const DetailImage = styled.img<{ imageHeight: Array<string> }>`
    object-fit: contain;
    width: ${(props) => props.width};
    height: ${(props) => props.imageHeight[0]};

    @media (min-width: ${(props) => props.theme.breakpoint.m}) {
        height: ${(props) => props.imageHeight[1]};
    }
`;

export const CountryLabel = styled.h3`
    position: absolute;
    left: 10px;
    bottom: 10px;
`;

export const DetailDescription = styled.p`
    padding: ${(props) => props.theme.spacing.xl};
    font-size: ${(props) => props.theme.fontSize.s};

    @media (min-width: ${(props) => props.theme.breakpoint.m}) {
        font-size: ${(props) => props.theme.fontSize.m};
    }
`;

export const ListItemWrapper = styled.li`
    display: flex;
    align-items: center;
    padding: 1rem;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.color.gray100};
    }
`;

export const ListImage = styled.img<{ imageHeight: Array<string> }>`
    flex: 0 0 50px;
    object-fit: contain;
    width: ${(props) => props.width};
    height: ${(props) => props.imageHeight[0]};

    @media (min-width: ${(props) => props.theme.breakpoint.m}) {
        flex: 0 0 80px;
        height: ${(props) => props.imageHeight[1]};
    }
`;

type FontSize = keyof typeof theme.fontSize;
type FontWeight = keyof typeof theme.fontWeight;

export const ListInfo = styled.div`
    flex: 1 1 auto;
`;

export const Text = styled.p<{ size: FontSize; weight: FontWeight }>`
    display: inline-block;
    padding-left: ${(props) => props.theme.spacing.l};
    font-size: ${(props) => props.theme.fontSize[props.size]};
    font-weight: ${(props) => props.theme.fontWeight[props.weight]};
`;
