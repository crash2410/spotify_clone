import {useNavigate} from "react-router-dom";

/**
 + * Отрисовывает компонент карточки артиста.
 + *
 + * @param {Object} track - Объект трека, содержащий информацию об артисте.
 + * @return {JSX.Element} Отрисованный компонент карточки артиста.
 + */

const ArtistCard = ({track}) => {
  const navigate = useNavigate();

  return (
      <div
          className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
          // Переход на страницу артиста при клике по карточке
          onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
      >
        <img
            src={track?.images?.coverart}
            alt="artist"
            className="w-full h-56 rounded-lg"
        />
        <p className="mt-4 font-semibold text-lg text-white truncate">
          {track?.title}
        </p>
      </div>
  )
};

export default ArtistCard;
