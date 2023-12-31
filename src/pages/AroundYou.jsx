import {useState, useEffect} from "react";
import axios from "axios";
import {useSelector} from "react-redux";

import {Error, Loader, SongCard} from "../components";
import {useGetSongByCountryQuery} from "../redux/services/shazamCore";

/**
 * Отображает список песен на основе страны пользователя.
 * Использует хук useGetSongByCountryQuery для получения списка песен.
 * Отображает индикатор загрузки во время получения данных и сообщение об ошибке, если произошла ошибка.
 *
 * @returns JSX элемент
 */
const AroundYou = () => {
    const [country, setCountry] = useState("");
    const [loading, setLoading] = useState(true);
    const {activeSong, isPlaying} = useSelector((state) => state.player);
    const {data, isFetching, error} = useGetSongByCountryQuery(country);

    // Получение страны пользователя с помощью API IPify и установка ее в состояние.
    useEffect(() => {
        axios
            .get(`https://geo.ipify.org/api/v2/country?apiKey=at_7We1JBLJcBXcvoFzMsD51XwkmnD45`)
            .then((res) => setCountry(res?.data?.location?.country))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [country])


    if (isFetching && loading) return <Loader title="Loaging songs around you"/>
    if (error && country) return <Error/>


    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
                Around You
                <span className="font-black"> {country}</span>
            </h2>

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

export default AroundYou;
