import {useSelector} from "react-redux";

import {Error, Loader, SongCard} from "../components";
import {useGetTopChartsQuery} from "../redux/services/shazamCore";

/**
 * Компонент для отображения списка популярных песен.
 */
const TopCharts = () => {
    // Получение активной песни и состояния воспроизведения из хранилища
    const {activeSong, isPlaying} = useSelector((state) => state.player);
    // Получение данных о популярных песнях, состояния загрузки и ошибки из хука useGetTopChartsQuery
    const {data, isFetching, error} = useGetTopChartsQuery();

    // Если данные загружаются, отображается компонент Loader
    if (isFetching) return <Loader title="Загрузка песен..."/>
    // Если произошла ошибка, отображается компонент Error
    if (error) return <Error/>

    // Возвращается разметка компонента
    return (
        <div className="flex flex-col">
            {/* Заголовок */}
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
                Популярные песни
            </h2>

            {/* Список песен */}
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.map((song, i) => {
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

export default TopCharts;
