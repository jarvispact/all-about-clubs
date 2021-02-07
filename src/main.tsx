import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { theme } from './theme';
import ClubList from './pages/club-list';
import ClubDetails from './pages/club-details';
import { ApiProvider } from './domain/api-context';
import { GlobalStyle } from './global-style';
import { de } from './translations/de';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <IntlProvider messages={de} locale="de" defaultLocale="en">
                <GlobalStyle />
                <ApiProvider>
                    <Router>
                        <Switch>
                            <Route path="/club/:id">
                                <ClubDetails />
                            </Route>
                            <Route path="/clubs">
                                <ClubList />
                            </Route>
                            <Route path="/">
                                <Redirect to="/clubs" />
                            </Route>
                        </Switch>
                    </Router>
                </ApiProvider>
            </IntlProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
