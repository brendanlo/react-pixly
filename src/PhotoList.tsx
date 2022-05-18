
function PhotoList({ photoList }) {
    return (
        <div className="PhotoList">
            {photoList.map(photo => {
                return (
                    <div key={photo.id} className="PhotoList-image">
                        <img src={photo.image_url} alt={photo.title} />
                        <p><b>Shot on:</b> {photo.device_model} ({photo.device_make})</p>
                    </div>
                );
            })}
        </div>
    );
}

export default PhotoList;