/* eslint-disable react/display-name */
import React from 'react';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { styled } from '../styled';
import { Fullpage } from './full-page';

const ErrorWrapper = styled.div`
    width: 300px;
    height: 300px;
    padding: ${(props) => props.theme.spacing.l};
    background-color: ${(props) => props.theme.color.error100};
    color: ${(props) => props.theme.color.error800};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${(props) => props.theme.boxShadow.fullpageError};
    text-align: center;
    border-radius: ${(props) => props.theme.radii.m};
`;

const EscapeAction = styled.button`
    margin-top: 20px;
    padding: ${(props) => props.theme.spacing.l};
    background-color: ${(props) => props.theme.color.error400};
    color: ${(props) => props.theme.color.white};
    border-style: none;
    border-radius: ${(props) => props.theme.radii.s};
    box-shadow: ${(props) => props.theme.boxShadow.iconButton};
    cursor: pointer;
`;

type Props = {
    error: Error;
};

export const ErrorIndicator = ({ error }: Props) => {
    const history = useHistory();
    const intl = useIntl();
    return (
        <Fullpage>
            <ErrorWrapper>
                <div>
                    {intl.formatMessage({ id: 'error' })}
                    <br />
                    <br />
                    {intl.formatMessage({ id: 'errorDetails' }, { message: error.message, b: (chunk) => <b>{chunk}</b> })}
                    <br />
                    <br />
                    <EscapeAction onClick={() => history.push('/')}>{intl.formatMessage({ id: 'errorEscapeAction' })}</EscapeAction>
                </div>
            </ErrorWrapper>
        </Fullpage>
    );
};
