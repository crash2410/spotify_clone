import {FaPauseCircle, FaPlayCircle} from "react-icons/all";

/**
 * Компонент кнопки воспроизведения/паузы.
 *
 * @param {boolean} isPlaying - Флаг, указывающий, проигрывается ли воспроизведение в данный момент.
 * @param {function} togglePlay - Функция для переключения состояния воспроизведения/паузы.
 * @returns {JSX.Element} Отображение компонента кнопки воспроизведения/паузы.
 */
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
