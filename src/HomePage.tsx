import PhotoList from "./PhotoList";

function HomePage({ photoList }) {

    return (
        <div>
            <h1>Welcome to Shot On</h1>
            <p> Any camera can take a great photo</p>
            <div className="HomePage-photos">
                <PhotoList photoList={photoList} />
            </div>

        </div>

    )
}

export default HomePage;