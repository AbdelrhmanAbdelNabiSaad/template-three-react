function FeaturesBox({className, feat}) {
    return ( 
        <>
            <div className={`box ${className}`}>
                <div className="img-holder">
                    <img src={feat.image} alt="Image" />
                </div>
                <h2>{feat.title}</h2>
                <p>{feat.text}</p>
                <a href="#">More</a>
            </div>
        </>
     );
}

export default FeaturesBox;