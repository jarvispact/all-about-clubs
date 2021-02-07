import React from 'react';
import { useIntl } from 'react-intl';
import { styled } from '../../../styled';
import { theme } from '../../../theme';
import { ClubListViewModel } from '../types';

const ListItemWrapper = styled.li`
    display: flex;
    align-items: center;
    padding: 1rem;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.color.gray100};
    }
`;

const Image = styled.img<{ imageHeight: Array<string> }>`
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

const Info = styled.div`
    flex: 1 1 auto;
`;

const Text = styled.p<{ size: FontSize; weight: FontWeight }>`
    display: inline-block;
    padding-left: ${(props) => props.theme.spacing.l};
    font-size: ${(props) => props.theme.fontSize[props.size]};
    font-weight: ${(props) => props.theme.fontWeight[props.weight]};
`;

type Props = {
    item: ClubListViewModel;
    onItemClick: (id: string) => void;
};

export const ClubListItem = ({ item, onItemClick }: Props) => {
    const intl = useIntl();

    return (
        <ListItemWrapper role="listitem" onClick={() => onItemClick(item.id)}>
            <Image src={item.image} width="100%" height="30px" imageHeight={['30px', '50px']} />
            <Info>
                <Text size="l" weight="xl">
                    {item.name}
                </Text>
                <br />
                <Text size="s" weight="l">
                    {item.country}
                </Text>
                <Text size="s" weight="m">
                    {intl.formatMessage({ id: 'clubListItemValue' }, { value: item.value })}
                </Text>
            </Info>
        </ListItemWrapper>
    );
};
