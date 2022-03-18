import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import PixlyApi from './Api';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5001/api';


function App() {
    const [photoList, setPhotoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(function loadUserInfo() {
        async function getAllPhotos() {
            const response = await axios.get(`${BASE_URL}/photos`);


            // overwrites the image URL to a generated URL
            for (let photoObj of response.data.photos) {

                const responses = await axios.get(
                    `${BASE_URL}/photos/imageurl`,
                    { params: { key: photoObj.image_url } });
                photoObj.image_url = responses.data;
                console.log(photoObj.image_url);
            }

            setPhotoList(response.data.photos);
            setIsLoading(false);
        }

        getAllPhotos();

    }, [isLoading]);

    if (isLoading) {
        return <p>Loading...</p>
    }

    function updatePhotoList(newFormData) {
        PixlyApi.addPhoto(newFormData);
        setPhotoList(photoList => ({ ...photoList }));
        setIsLoading(true);
    }

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes
                    getPhotos={PixlyApi.getPhotos}
                    addPhoto={updatePhotoList}
                    photoList={photoList} />
            </BrowserRouter>
        </div>
    );
}

export default App;
