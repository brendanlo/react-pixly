import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import PixlyApi from './Api';
import axios from 'axios';
import React, { useState } from 'react';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5001/api';


function App() {
    const [photoList, setPhotoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getAllPhotos() {
        const response = await axios.get(`${BASE_URL}/photos`);

        // overwrites the image URL to a generated URL
        for (let photoObj of response.data) {
            photoObj.image_url = await axios.get(
                `${BASE_URL}/photos/imageurl`,
                { params: { key: photoObj.image_url } });
        }

        setPhotoList(response.data);
        setIsLoading(false);
    }

    if (isLoading) {
        getAllPhotos();
        return <p> Loading...</p>;
    }


    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes
                    getPhotos={PixlyApi.getPhotos}
                    addPhoto={PixlyApi.addPhoto}
                    photoList={photoList} />
            </BrowserRouter>
        </div>
    );
}

export default App;
