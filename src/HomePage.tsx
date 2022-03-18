

function HomePage({ photoList }) {

    return (
        <div>
            <h1>Welcome to Shot On</h1>
            <p> Any camera can take a great photo</p>
            <div className="HomePage-photos">
                {photoList.map(photo => {
                    return (
                        <div key={photo.id}>
                            <img src={photo.image_url} alt={photo.title} />
                            <p><b>Shot on:</b> {photo.device_model} ({photo.device_make})</p>
                        </div>
                    );
                })}
            </div>

        </div>

    )
}

export default HomePage;