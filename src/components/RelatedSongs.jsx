import {SongBar} from "../components";

/**
 * Компонент для отображения связанных песен.
 *
 * @param {Array} data - Массив данных связанных песен.
 * @param {boolean} isPlaying - Состояние воспроизведения.
 * @param {Object} activeSong - Активная песня.
 * @param {Function} handlePauseClick - Обработчик клика на кнопку паузы.
 * @param {Function} handlePlayClick - Обработчик клика на кнопку воспроизведения.
 * @param {string} artistId - Идентификатор артиста.
 */
const RelatedSongs = ({data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId}) => {
    return (
        <div className="flex flex-col">
            <h1 className="text-white font-bold text-3xl">Related Songs:</h1>

            <div className="mt-6 flex flex-col w-full">
                {data?.map((song, i) => (
                    <SongBar
                        key={`${song.key || artistId + i}$`}
                        song={song}
                        i={i}
                        artistId={artistId}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        handlePlayClick={handlePlayClick}
                        handlePauseClick={(song, i) => handlePauseClick(song, i)}
                    />
                ))}
            </div>
        </div>
    );
}

export default RelatedSongs;
