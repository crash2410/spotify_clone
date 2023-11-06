import {FaPauseCircle, FaPlayCircle} from "react-icons/all";

const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay}) => (
    (isPlaying && activeSong?.title === song.title) ? (
        <FaPauseCircle size="2rem" className="text-gray-200" onClick={handlePause}/>
    ) : (
        <FaPlayCircle size="2rem" className="text-gray-200" onClick={handlePlay}/>
    )

);

export default PlayPause;
