/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';

/**
 * Рендерит плеер музыки.
 *
 * @param {Object} props - Свойства компонента.
 * @param {string} props.activeSong - Активная песня.
 * @param {boolean} props.isPlaying - Указывает, играет ли музыка в данный момент.
 * @param {number} props.volume - Громкость музыки.
 * @param {number} props.seekTime - Время, на которое нужно перемотать музыку.
 * @param {function} props.onEnded - Функция обратного вызова, вызываемая после окончания музыки.
 * @param {function} props.onTimeUpdate - Функция обратного вызова, вызываемая после обновления времени воспроизведения музыки.
 * @param {function} props.onLoadedData - Функция обратного вызова, вызываемая после загрузки данных музыки.
 * @param {boolean} props.repeat - Указывает, должна ли музыка повторяться.
 * @returns {JSX.Element} - Рендерится компонент плеера музыки.
 */
const Player = ({ activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat }) => {
  const ref = useRef(null);
  // eslint-disable-next-line no-unused-expressions
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
