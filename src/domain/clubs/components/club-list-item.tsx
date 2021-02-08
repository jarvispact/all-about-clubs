import React from 'react';
import { useIntl } from 'react-intl';
import { ClubListViewModel } from '../types';
import { ListImage, ListItemWrapper, ListInfo, Text } from './styled';

type Props = {
    item: ClubListViewModel;
    onItemClick: (id: string) => void;
};

export const ClubListItem = ({ item, onItemClick }: Props) => {
    const intl = useIntl();

    return (
        <ListItemWrapper role="listitem" onClick={() => onItemClick(item.id)}>
            <ListImage src={item.image} width="100%" height="30px" imageHeight={['30px', '50px']} />
            <ListInfo>
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
            </ListInfo>
        </ListItemWrapper>
    );
};
