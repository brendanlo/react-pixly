import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import BrowsePage from './BrowsePage';
import AddForm from './AddForm';
import SearchForm from './SearchForm';

function Routes({ getPhotos, addPhoto, photoList, searchPhotos }) {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage photoList={photoList} />
            </Route>
            <Route exact path="/photos">
                <BrowsePage />
            </Route>
            <Route exact path="/photos/add">
                <AddForm addPhoto={addPhoto} />
            </Route>
            <Route exact path="/photos/search">
                <SearchForm searchPhotos={searchPhotos} />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
}

export default Routes;