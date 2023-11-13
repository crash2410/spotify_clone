import {loader} from '../assets';

/**
 * Компонент отображения загрузчика.
 *
 * @param {string} title - Заголовок загрузчика.
 * @returns {JSX.Element} Отображение компонента загрузчика.
 */
const Loader = ({title}) => (
  <div className='w-full justify-center items-center flex-col'>
      <img src={loader} alt="loader" className="w-32 h-32 object-contain"/>
      <h1 className="font-bold text-3xl text-white mt2">{title || "Loading.."}</h1>
  </div>
);

export default Loader;
