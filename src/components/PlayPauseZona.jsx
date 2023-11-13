import {FaPauseCircle, FaPlayCircle} from "react-icons/all";

/**
 * Компонент кнопки воспроизведения/паузы в зоне.
 *
 * @param {boolean} isPlaying - Флаг, указывающий, проигрывается ли воспроизведение в данный момент.
 * @param {object} activeSong - Активная песня.
 * @param {object} song - Песня.
 * @param {function} handlePause - Функция для приостановки воспроизведения.
 * @param {function} handlePlay - Функция для начала воспроизведения.
 * @returns {JSX.Element} Отображение компонента кнопки воспроизведения/паузы в зоне.
 */
const PlayPauseZona = ({isPlaying, activeSong, song, handlePause, handlePlay}) => {

    return (
        <div className="relative w-full h-56 group"
             onClick={(isPlaying && activeSong?.title === song.title) ? handlePause : handlePlay}>
            <div
                className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
                {(isPlaying && activeSong?.title === song.title) ? (
                    <FaPauseCircle size="2rem" className="text-gray-200" onClick={handlePause}/>
                ) : (
                    <FaPlayCircle size="2rem" className="text-gray-200" onClick={handlePlay}/>
                )}
            </div>
            <img src={song.images?.coverart} alt="song_image"/>
        </div>
    )

};

export default PlayPauseZona;
