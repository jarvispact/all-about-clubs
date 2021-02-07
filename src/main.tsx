import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import ClubList from './pages/club-list';
import ClubDetails from './pages/club-details';

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
                            <Link to="/club/1234">Club</Link>
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
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
