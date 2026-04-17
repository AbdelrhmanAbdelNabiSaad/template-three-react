function WorkBox({work}) {
    const { image, title, text } = work;
    return (
        <>
            <div className="box">
                <img src={image} alt="Image" />
                <div className="text">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>
     );
}

export default WorkBox;