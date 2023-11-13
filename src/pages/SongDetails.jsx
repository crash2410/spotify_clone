import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {DetailsHeader, Error, Loader, RelatedSongs} from "../components";

import {setActiveSong, playPause} from "../redux/features/playerSlice";
import {useGetSongDetailsQuery, useGetSongRelatedQuery} from "../redux/services/shazamCore";

/**
 * Компонент для отображения деталей песни.
 */
const SongDetails = () => {
    // Получаем dispatch и параметры из URL
    const dispatch = useDispatch();
    const {songid, artistId} = useParams();

    // Получаем данные и состояние из Redux
    const {activeSong, isPlaying, spotify} = useSelector((state) => state.player);
    const {data: songData, isFetching: isFetchingSongDetails} = useGetSongDetailsQuery({songid});
    const {data: songRelated, isFetching: isFetchingSongRelated, error} = useGetSongRelatedQuery({songid});

    // Обработчики событий
    const handlePauseClick = () => {
        dispatch(playPause(false));
    }
    const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({song, data: songRelated, i}));
        dispatch(playPause(true));
    }

    // Отображение загрузчика, ошибки или контента
    if (isFetchingSongDetails || isFetchingSongRelated) return <Loader title="Searching song details"/>
    if (error) return <Error/>

    return (
        <div className="flex flex-col">

            {/* Заголовок */}
            <DetailsHeader
                artistId={artistId}
                songData={songData}
            />



            {/* Текст песни */}
            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
                <div className="mt-5">
                    {
                        songData?.sections[1].type === 'LYRICS' ?
                            songData?.sections[1].text.map((line, i) => (
                                <p key={line.key} className="text-gray-400 text-base my-1 ml-10">
                                    {line}
                                </p>
                            )) : <p key={Math.floor(Math.random() * 1000000)} className="text-gray-400 text-base my-1">Sorry, no lyrics found!</p>
                    }
                </div>
            </div>

            {/* Похожие песни */}
            <RelatedSongs
                artistId={artistId}
                data={songRelated}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
            />

        </div>
    )
};

export default SongDetails;