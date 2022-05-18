import PhotoList from "./PhotoList";


function BrowsePage({ photoList }) {
    return (
        <div className="BrowsePage pixly">
            <h1> Browse Images</h1>
            <p> See photos other users have shared </p>
            <PhotoList photoList={photoList} />
        </div>
    );
}

export default BrowsePage;