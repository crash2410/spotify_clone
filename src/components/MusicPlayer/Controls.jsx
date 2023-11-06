import React from 'react';
import {MdSkipNext, MdSkipPrevious} from 'react-icons/md';
import {BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle} from 'react-icons/bs';

/**
 + * Рендерит элементы управления для плеера музыки.
 + *
 + * @param {boolean} isPlaying - Указывает, играет ли музыка в данный момент.
 + * @param {boolean} repeat - Указывает, должна ли музыка повторяться.
 + * @param {function} setRepeat - Функция обратного вызова для установки состояния повтора.
 + * @param {boolean} shuffle - Указывает, должна ли музыка быть перемешана.
 + * @param {function} setShuffle - Функция обратного вызова для установки состояния перемешивания.
 + * @param {Array} currentSongs - Массив текущих песен.
 + * @param {function} handlePlayPause - Функция обратного вызова для обработки воспроизведения/паузы.
 + * @param {function} handlePrevSong - Функция обратного вызова для обработки предыдущей песни.
 + * @param {function} handleNextSong - Функция обратного вызова для обработки следующей песни.
 + * @returns {JSX.Element} - Рендерится компонент элементов управления.
 **/
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
