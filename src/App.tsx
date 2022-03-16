import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import PixlyApi from './Api';

function App() {


    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes
                    getPhotos={PixlyApi.getPhotos}
                    addPhoto={PixlyApi.addPhoto} />
            </BrowserRouter>
        </div>
    );
}

export default App;
