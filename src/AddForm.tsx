import { useState } from "react";

function AddForm({ addPhoto }) {
    const formDefaults = {
        title: "",
        file: "",
        description: "",
        tags: ""
    };

    const [formData, setFormData] = useState(formDefaults);

    function handleSubmit(evt) {
        evt.preventDefault();
        addPhoto(formData);
        setFormData(formDefaults);
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(data => ({ ...data, [name]: value }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title"
                    placeholder="Enter title for photo.."
                    value={formData.title}
                    onChange={handleChange}
                />
                <label htmlFor="file">Upload</label>
                <input
                    type="file"
                    id="file"
                    name="file"
                    accept="image/png, image/jpeg, image/jpg"
                    value={formData.file}
                    onChange={handleChange}
                />
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    name="description"
                    placeholder="Write some descriptions if needed"
                    value={formData.description}
                    onChange={handleChange}
                />
                <label htmlFor="tags">Tags</label>
                <input
                    id="tags"
                    name="tags"
                    placeholder="tag1,tag2,tag3,..."
                    value={formData.tags}
                    onChange={handleChange}
                />

            </div>
            <button type="submit" className="btn btn-lg btn-primary">
                Submit
            </button>
        </form>)
}

export default AddForm;