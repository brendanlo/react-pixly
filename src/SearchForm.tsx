import { useState } from "react";
import PhotoList from "./PhotoList";

function SearchForm({ searchPhotos }) {
    const formDefaults = {
        deviceMake: "",
        deviceModel: ""
    };

    const [inputSearch, setInputSearch] = useState(formDefaults);
    const [photoList, setPhotoList] = useState([]);

    function handleSubmit(evt) {
        evt.preventDefault();
        const filteredPhotos = searchPhotos(inputSearch.deviceMake, inputSearch.deviceModel);
        console.log("filteredPhotos (shoudl be a photolist: ", filteredPhotos);

        setPhotoList(filteredPhotos);
        setInputSearch(formDefaults);
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setInputSearch(data => ({ ...data, [name]: value }));
    }

    return (
        <div className="SearchForm pixly">
            <h1>Search for photos</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="deviceMake">Camera Make</label>
                <input
                    id="deviceMake"
                    name="deviceMake"
                    type='text'
                    placeholder="Enter Make"
                    value={inputSearch.deviceMake}
                    onChange={handleChange}
                />
                <label htmlFor="deviceModel">Camera Model</label>
                <input
                    id="deviceModel"
                    name="deviceModel"
                    type='text'
                    placeholder="Enter Camera Model"
                    value={inputSearch.deviceModel}
                    onChange={handleChange}
                />

                <button type="submit">
                    Search
                </button>
            </form>
            <div>
                <PhotoList photoList={photoList} />
            </div>
        </div >
    );
}

export default SearchForm;