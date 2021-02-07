import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import ClubList from './pages/club-list';
import ClubDetails from './pages/club-details';
import { ApiProvider } from './domain/api-context';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#01C13B',
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <ApiProvider>
                <Router>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/clubs">Clubs</Link>
                            </li>
                            <li>
                                <Link to="/club/98c62c76-09f5-4a7b-a16a-08d6694a84a9">Club</Link>
                            </li>
                        </ul>
                    </nav>
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
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
