import {useState} from "react";

import {useNavigate} from "react-router-dom";

import {FiSearch} from "react-icons/all";

/**
 * Компонент поисковой строки.
 *
 * Отвечает за отображение и логику работы поисковой строки.
 */
const Searchbar = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    /**
     * Обработчик отправки формы.
     *
     * Препятствует отправке формы по умолчанию и перенаправляет пользователя на страницу с результатами поиска.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
            <label htmlFor="search-field" className="sr-only">
                Search all songs
            </label>
            <div className="flex flex-row justify-start items-center">
                <FiSearch className="w-6 h-5 ml-4"/>
                <input
                    className="flex-1 bg-transparent border-none outline-none placeholder-gray-300 text-base text-white p-4"
                    name="search-field"
                    autoComplete="off"
                    id="search-field"
                    placeholder="Search"
                    type="search"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                />
            </div>
        </form>
    );
};

export default Searchbar;
