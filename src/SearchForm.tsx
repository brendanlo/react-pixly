import { useState } from "react";
import PhotoList from "./PhotoList";

function SearchForm({ searchPhotos }) {
    const formDefaults = {
        make: "",
        model: ""
    };

    const [inputSearch, setInputSearch] = useState(formDefaults);
    const [photoList, setPhotoList] = useState([]);

    function handleSubmit(evt) {
        evt.preventDefault();
        const filteredPhotos = searchPhotos(inputSearch.make, inputSearch.model);
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
                    value={inputSearch.make}
                    onChange={handleChange}
                />
                <label htmlFor="deviceModel">Camera Model</label>
                <input
                    id="deviceModel"
                    name="deviceModel"
                    type='text'
                    placeholder="Enter Camera Model"
                    value={inputSearch.model}
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