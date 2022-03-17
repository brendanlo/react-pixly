import React, { useState } from "react";

function AddForm({ addPhoto }) {
    const formDefaults = {
        title: "",
        description: "",
        tags: ""
    };

    const [inputData, setInputData] = useState(formDefaults);
    const [selectedFile, setSelectedFile] = useState(null);

    const fileInput = React.createRef();
    function handleSubmit(evt) {
        evt.preventDefault();

        // creating and populating a FormData object
        let newFormData = new FormData();
        newFormData.append('title', inputData.title);
        newFormData.append('file', selectedFile);
        newFormData.append('description', inputData.description);
        newFormData.append('tags', inputData.tags);

        console.log("inputdata file is: ", fileInput);
        console.log("newFormData: ", newFormData);
        addPhoto(newFormData);
        setInputData(formDefaults);
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setInputData(data => ({ ...data, [name]: value }));
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title"
                    placeholder="Enter title for photo.."
                    value={inputData.title}
                    onChange={handleChange}
                />
                <label htmlFor="file">Upload</label>
                <input
                    type="file"
                    id="file"
                    name="file"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                />
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    name="description"
                    placeholder="Write some descriptions if needed"
                    value={inputData.description}
                    onChange={handleChange}
                />
                <label htmlFor="tags">Tags</label>
                <input
                    id="tags"
                    name="tags"
                    placeholder="tag1,tag2,tag3,..."
                    value={inputData.tags}
                    onChange={handleChange}
                />

            </div>
            <button type="submit" className="btn btn-lg btn-primary">
                Submit
            </button>
        </form>)
}

export default AddForm;