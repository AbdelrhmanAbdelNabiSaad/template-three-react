function GalleryBox({image , index}) {
    return (
      <>
        <div className="box">
          <div className="image">
            <img src={image} alt={`Image ${index}`} />
          </div>
        </div>
      </>
    );
}

export default GalleryBox;