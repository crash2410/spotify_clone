import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";

import PlayPauseZona from "./PlayPauseZona";
import {playPause, setActiveSong} from "../redux/features/playerSlice";

const SongCard = ({song, i, activeSong, isPlaying, data}) => {
    const dispatch = useDispatch();

    const handlePauseClick = () => {
        dispatch(playPause(false));
    }

    const handlePlayClick = () => {
        dispatch(setActiveSong({song, data, i}));
        dispatch(playPause(true));
    }

    return (<div
        className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
        <PlayPauseZona
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
        />
        <div className="mt-4 flex flex-col">
            <p className="font-semibold text-lg text-white truncate">
                <Link to={`/songs/${song.key}`}>
                    {song.title}
                </Link>
            </p>
            <p className="text-sm truncate text-gray-300 mt-1">
                <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
                    {song.subtitle}
                </Link>
            </p>
        </div>
    </div>)
}

export default SongCard;
