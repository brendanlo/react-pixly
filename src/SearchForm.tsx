import { useState } from "react";

function SearchForm() {
    const formDefaults = {
        make: "",
        model: ""
    };

    const [inputSearch, setInputSearch]= useState(formDefaults);

    function handleSubmit(evt){
        evt.preventDefault();
        //Add function for searching
        setInputSearch(formDefaults);
    }

    function handleChange(evt){
        const { name, value } = evt.target;
        setInputSearch(data => ({ ...data, [name]: value }));
    }

    return (
        <div className="SearchForm pixly">
            <h1>Search for photos</h1>
            <form onSubmit={handleSubmit}>
                <input
                    id="deviceMake"
                    name="deviceMake"
                    placeholder="Enter Make"
                    value={inputSearch.make}
                    onChange={handleChange}
                />
                <input
                    id="deviceModel"
                    name="deviceModel"
                    placeholder="Enter Camera Model"
                    value={inputSearch.model}
                    onChange={handleChange}
                />

                <button type="submit">
                    Search
                </button>
            </form>
        </div >
    );
}

export default SearchForm;