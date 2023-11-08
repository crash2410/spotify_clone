import {FaPauseCircle, FaPlayCircle} from "react-icons/all";

const PlayPause = ({
                       i,
                           isPlaying,
                           activeSong,
                           song,
                           handlePause,
                           handlePlay
                   }) => {

    return (isPlaying && activeSong?.title === song.title) ? (
        <FaPauseCircle size="2rem" className="text-gray-200" onClick={handlePause}/>
    ) : (
        <FaPlayCircle size="2rem" className="text-gray-200" onClick={() => handlePlay(song, i)}/>
    );
}

export default PlayPause;
