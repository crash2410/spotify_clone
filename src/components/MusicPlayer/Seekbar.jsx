import React from 'react';

/**
 * Рендерит панель прокрутки для воспроизведения музыки.
 *
 * @param {Object} props - Свойства компонента.
 * @param {number} props.duration - Продолжительность музыки.
 * @param {number} props.seekTime - Время, на которое нужно перемотать музыку.
 * @param {function} props.onSeek - Функция обратного вызова, вызываемая при перемещении ползунка.
 * @param {function} props.onEnded - Функция обратного вызова, вызываемая после окончания музыки.
 * @returns {JSX.Element} - Рендерится компонент панели прокрутки.
 */
const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <div className="hidden sm:flex flex-row items-center">
      <button type="button" onClick={() => setSeekTime(appTime - 5)} className="hidden lg:mr-4 lg:block text-white">
        -
      </button>
      <p className="text-white">{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
      />
      <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
      <button type="button" onClick={() => setSeekTime(appTime + 5)} className="hidden lg:ml-4 lg:block text-white">
        +
      </button>
    </div>
  );
};

export default Seekbar;
