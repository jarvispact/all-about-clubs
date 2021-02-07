import React from 'react';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { styled } from '../styled';
import { Fullpage } from './full-page';

const Wrapper = styled.div`
    width: 300px;
    height: 300px;
    padding: ${(props) => props.theme.spacing.l};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const EscapeAction = styled.button`
    margin-top: 20px;
    padding: ${(props) => props.theme.spacing.l};
    background-color: ${(props) => props.theme.color.primary500};
    color: ${(props) => props.theme.color.white};
    border-style: none;
    border-radius: ${(props) => props.theme.radii.s};
    box-shadow: ${(props) => props.theme.boxShadow.iconButton};
    cursor: pointer;
`;

export const NotFound = () => {
    const history = useHistory();
    const intl = useIntl();
    return (
        <Fullpage>
            <Wrapper>
                <div>
                    {intl.formatMessage({ id: 'notFound' })}
                    <br />
                    <EscapeAction onClick={() => history.push('/')}>{intl.formatMessage({ id: 'errorEscapeAction' })}</EscapeAction>
                </div>
            </Wrapper>
        </Fullpage>
    );
};
