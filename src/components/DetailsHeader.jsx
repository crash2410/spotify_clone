import {Link} from "react-router-dom";

/**
 * Отображает компонент заголовка для страницы с детальной информацией.
 *
 * @param {string} artistId - Идентификатор артиста.
 * @param {object} artistData - Данные об артисте.
 * @param {object} songData - Данные о песне.
 * @return {JSX.Element} Отображаемый компонент заголовка.
 */
const DetailsHeader = ({artistId, artistData, songData}) => {
    // Отображение компонента заголовка
    return (
        <div className="relative w-full flex flex-col">
            {/* Фон */}
            <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28">

                {/* Контент */}
                <div className="absolute inset-0 flex items-center">
                    {/* Изображение артиста/песни */}
                    <img
                        src={
                            artistId
                                ? artistData?.avatar
                                : songData?.images?.coverart
                        }
                        alt="art"
                        className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
                    />

                    {/* Информация об артисте/песне */}
                    <div className="ml-5">
                        {/* Имя артиста/песни */}
                        <p className="font-bold sm:text-3xl text-xl text-white">
                            {artistId
                                ? artistData?.attributes.name
                                : songData?.title}
                        </p>

                        {/* Подзаголовок песни */}
                        {!artistId && (
                            <Link to={`/artists/${songData?.artists[0].adamid}`}>
                                <p className="text-base text-gray-400 mt-2">
                                    {songData?.subtitle}
                                </p>
                            </Link>
                        )}

                        {/* Жанр артиста/песни */}
                        <p className="text-base text-gray-400 mt-2">
                            {artistId
                                ? artistData?.attributes.genreNames[0]
                                : songData?.genres?.primary}
                        </p>
                    </div>
                </div>
            </div>

            {/* Заполнитель */}
            <div className="w-full sm:h-44 h-24"></div>
        </div>
    );
};

export default DetailsHeader;
