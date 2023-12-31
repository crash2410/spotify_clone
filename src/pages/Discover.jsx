import {Error, Loader, SongCard} from '../components';
import {genres} from '../assets/constants';
import {useGetSongsByGenreQuery} from "../redux/services/shazamCore";
import {selectGenreListId} from "../redux/features/playerSlice";
import {useDispatch, useSelector} from "react-redux";

/**
 * Рендерит компонент, который отображает список песен на основе выбранного жанра.
 */
const Discover = () => {
    const dispatch = useDispatch(); // Получение функции dispatch из хука useDispatch
    const {activeSong, isPlaying, genreListId} = useSelector((state) => state.player); // Получение данных из хранилища Redux с помощью хука useSelector

    // Получение песен на основе выбранного жанра
    const {data, isFetching, error} = useGetSongsByGenreQuery(genreListId || `POP`);

    // Отображение индикатора загрузки при получении данных
    if (isFetching) return <Loader title="Loading songs around you"/>;

    // Отображение сообщения об ошибке, если произошла ошибка
    if (error) return <Error/>;

    // Поиск названия выбранного жанра
    const genreTitle = genres.find((genre) => genre.value === genreListId)?.title;

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
                <select
                    onChange={(e) => {
                        dispatch(selectGenreListId(e.target.value)); // Вызов action creator для обновления выбранного жанра
                    }}
                    value={genreListId || 'pop'}
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                >
                    {genres.map((genre) => {
                        return (
                            <option key={genre.value} value={genre.value}>
                                {genre.title}
                            </option>
                        );
                    })}
                </select>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data.map((song, i) => (
                    <SongCard
                        song={song}
                        i={i}
                        key={song.key}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                    />
                ))}
            </div>
        </div>
    );
};

export default Discover;
