import React from 'react';
import {MdSkipNext, MdSkipPrevious} from 'react-icons/md';
import {BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle} from 'react-icons/bs';

/**
 * Компонент для отображения контролов воспроизведения (кнопки воспроизведения, паузы, следующей и предыдущей песни).
 *
 * @param {boolean} isPlaying - Состояние воспроизведения.
 * @param {boolean} repeat - Состояние повтора.
 * @param {function} setRepeat - Функция для установки состояния повтора.
 * @param {boolean} shuffle - Состояние перемешивания.
 * @param {function} setShuffle - Функция для установки состояния перемешивания.
 * @param {Array} currentSongs - Массив текущих песен.
 * @param {function} handlePlayPause - Обработчик клика на кнопку воспроизведения/паузы.
 * @param {function} handlePrevSong - Обработчик клика на кнопку предыдущей песни.
 * @param {function} handleNextSong - Обработчик клика на кнопку следующей песни.
 */
const Controls = ({
                      isPlaying,
                      repeat,
                      setRepeat,
                      shuffle,
                      setShuffle,
                      currentSongs,
                      handlePlayPause,
                      handlePrevSong,
                      handleNextSong
                  }) => (
    <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
        {/* Кнопка повтора */}
        <BsArrowRepeat size={20} color={repeat ? 'red' : 'white'} onClick={() => setRepeat((prev) => !prev)}
                       className="hidden sm:block cursor-pointer"/>
        {/* Кнопка предыдущей песни */}
        {currentSongs?.length &&
            <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong}/>}
        {/* Кнопка воспроизведения/паузы */}
        {isPlaying ? (
            <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer"/>
        ) : (
            <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer"/>
        )}
        {currentSongs?.length &&
            <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong}/>}
        <BsShuffle size={20} color={shuffle ? 'red' : 'white'} onClick={() => setShuffle((prev) => !prev)}
                   className="hidden sm:block cursor-pointer"/>
    </div>
);

export default Controls;