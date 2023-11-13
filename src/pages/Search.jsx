import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {Error, Loader, SongCard} from "../components";
import {useGetSongsBySearchQuery} from "../redux/services/shazamCore";

/**
 * Компонент для отображения результатов поиска.
 * @returns {JSX.Element} Рендеринг компонента.
 */
const Search = () => {
    const {searchTerm} = useParams(); // Получение значения параметра searchTerm из URL
    const {activeSong, isPlaying} = useSelector((state) => state.player); // Получение данных из хранилища Redux с помощью хука useSelector
    const {data, isFetching, error} = useGetSongsBySearchQuery(searchTerm); // Получение данных о песнях по поисковому запросу

    const songs = data?.tracks?.hits?.map((song) => song.track); // Получение списка песен из данных

    if (isFetching) return <Loader title="Загрузка песен вокруг вас"/>; // Отображение индикатора загрузки при получении данных
    if (error) return <Error/>; // Отображение сообщения об ошибке, если произошла ошибка

    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
                Показаны результаты для <span className="font-black">{searchTerm}</span>
            </h2>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {songs?.map((song, i) => {
                    return <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                    />
                })}
            </div>
        </div>
    )
};

export default Search;
