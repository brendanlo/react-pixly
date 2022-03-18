

function HomePage({ photoList }) {

    return (
        <div>
            <h1>Welcome to pixly</h1>
            {photoList.map(photo => {
                return (
                    <img key={photo.id} src={photo.image_url} alt={photo.title} />
                );
            })}
        </div>

    )
}

export default HomePage;