import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

/** API Class 
 * 
 * Static class tying together methods used to get/send to to the API.
*/

class PixlyApi {

    /** Adds a photo to the backend  */
    static async addPhoto({ title, file, description, tags }) {
        const data = {
            title: title,
            file: file,
            description: description,
            tags: tags
        };
        let res = await axios.post(`${BASE_URL}/api/photos`, data);

        return res.data;
    }

    /** Gets all photos from the backend */
    static async getPhotos() {
        let res = await axios.get(`${BASE_URL}/api/photos`);
        return res.data;
    }

    /** TODO edit photo function */
}

export default PixlyApi;