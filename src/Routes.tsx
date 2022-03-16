import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import BrowsePage from './BrowsePage';
import AddForm from './AddForm';
import SearchForm from './SearchForm';

function Routes({ getPhotos, addPhoto }) {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/photos">
                <BrowsePage />
            </Route>
            <Route exact path="/photos/add">
                <AddForm addPhoto={addPhoto} />
            </Route>
            <Route exact path="/photos/search">
                <SearchForm />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
}

export default Routes;