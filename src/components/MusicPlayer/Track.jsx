import React from 'react';

/**
 * Рендерит трек музыки.
 *
 * @param {Object} props - Свойства компонента.
 * @param {boolean} props.isPlaying - Указывает, играет ли музыка в данный момент.
 * @param {boolean} props.isActive - Указывает, активен ли трек.
 * @param {string} props.activeSong - Активная песня.
 * @returns {JSX.Element} - Рендерится компонент трека музыки.
 */
const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
