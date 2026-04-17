
import React from "react";
import gallery1 from "../assets/gallery-01.png";
import gallery2 from "../assets/gallery-02.png";
import gallery3 from "../assets/gallery-03.jpg";
import gallery4 from "../assets/gallery-04.png";
import gallery5 from "../assets/gallery-05.jpg";
import gallery6 from "../assets/gallery-06.png";
import GalleryBox from "./GalleryBox";
import Spikes from "./Spikes";

function Gallery() {
    const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
    
    return <>
        <Spikes />
        <div className="gallery" id="gallery">
            <h2 className="main-title">Gallery</h2>
            <div className="container">
                {images.map((img, index) => <GalleryBox key={index} image={img} />)}
            </div>
        </div>
    </>;
}

export default Gallery;
