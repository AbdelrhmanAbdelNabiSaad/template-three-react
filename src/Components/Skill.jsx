function Skill({ skill }) {
    const { sk, progress } = skill; 
    return <>
        <div className="skill">
            <h3>{sk} <span>{progress}</span></h3>
            <div className="the-progress">
                <span style={{width: `${progress}`}}></span>
            </div>
        </div>
    </>;
}

export default Skill;