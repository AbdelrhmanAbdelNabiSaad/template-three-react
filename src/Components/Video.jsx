import { faRandom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vid from '../assets/video-preview.jpg'
function Video() {

    const videos = [
      { name: "How To Create Sub Domain", time: "05:18" },
      { name: "Playing With The DNS", time: "03:18" },
      { name: "Everything About The Virtual Hosts", time: "05:25" },
      { name: "How To Monitor Your Website", time: "04:16" },
      { name: "Uncharted Beating The Last Boss", time: "07:48" },
      { name: "Ys Oath In Felghana Overview ", time: "03:12" },
      { name: "Ys Series All Games Ending ", time: "08:10" },
    ];

    return ( 
        <>
            <div className="video" id="video">
                <h2 className="main-title">Top Videos</h2>
                <div className="container">
                    <div className="holder">
                        <div className="list">
                            <div className="name">
                                Top Videos
                                <FontAwesomeIcon icon={faRandom} />
                            </div>
                            <ul>
                                {videos.map((li) => <li>{li.name} <span>{li.time}</span></li>)}
                            </ul>
                        </div>
                        <div className="preview">
                            <img src={vid} alt="" />
                            <div className="info">Everything About The Virtual Hosts</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Video;