import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {DetailsHeader, Error, Loader, RelatedSongs} from "../components";

import {useGetArtistDetailsQuery} from "../redux/services/shazamCore";

/**
 * Компонент для отображения деталей по выбранному исполнителю.
 */
const ArtistDetails = () => {
    // Получаем  параметры из URL
    const {id: artistId} = useParams();

    // Получаем данные и состояние из Redux
    const {activeSong, isPlaying, spotify} = useSelector((state) => state.player);
    const {data: artistData, isFetching: isFetchingArtistDetails, error} = useGetArtistDetailsQuery({artistId});


    // Отображение загрузчика, ошибки или контента
    if (isFetchingArtistDetails) return <Loader title="Searching artist details"/>
    if (error) return <Error/>

    return (
        <div className="flex flex-col">

            {/* Заголовок */}
            <DetailsHeader
                artistId={artistId}
                artistData={artistData?.data[0]}
            />


            {/* Похожие песни */}

            <RelatedSongs
                artistId={artistId}
                data={Object.values(artistData?.data[0].views?.["top-songs"]?.data)}
                isPlaying={isPlaying}
                activeSong={activeSong}
            />


        </div>
    )
};

export default ArtistDetails;