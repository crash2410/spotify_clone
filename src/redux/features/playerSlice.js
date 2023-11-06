import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
};
/**
 * Создает слайс для управления плеером музыки.
 *
 * @returns {Object} - Слайс для управления плеером музыки.
 */
const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    /**
     * Устанавливает активную песню.
     *
     * @param {Object} state - Текущее состояние слайса.
     * @param {Object} action - Действие, которое вызывает этот редюсер.
     * @param {Object} action.payload - Данные, переданные вместе с действием.
     * @param {Object} action.payload.song - Активная песня.
     */
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    /**
     * Переключает на следующую песню.
     *
     * @param {Object} state - Текущее состояние приложения.
     * @param {Object} action - Действие, которое вызывает эту функцию.
     * @param {number} action.payload - Индекс следующей песни.
     */
    nextSong: (state, action) => {
      // Проверяем, есть ли в `currentSongs` элемент с индексом `action.payload`
      if (state.currentSongs[action.payload]?.track) {
        // Если есть, устанавливаем `activeSong` равным `track` этого элемента
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        // Если нет, устанавливаем `activeSong` равным элементу с индексом `action.payload`
        state.activeSong = state.currentSongs[action.payload];
      }

      // Устанавливаем `currentIndex` равным `action.payload`
      state.currentIndex = action.payload;

      // Устанавливаем `isActive` равным `true`
      state.isActive = true;
    },

    /**
     * Переключает на предыдущую песню.
     *
     * @param {Object} state - Текущее состояние приложения.
     * @param {Object} action - Действие, которое вызывает эту функцию.
     * @param {number} action.payload - Индекс предыдущей песни.
     */
    prevSong: (state, action) => {
      // Проверяем, есть ли в `currentSongs` элемент с индексом `action.payload`
      if (state.currentSongs[action.payload]?.track) {
        // Если есть, устанавливаем `activeSong` равным `track` этого элемента
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        // Если нет, устанавливаем `activeSong` равным элементу с индексом `action.payload`
        state.activeSong = state.currentSongs[action.payload];
      }

      // Устанавливаем `currentIndex` равным `action.payload`
      state.currentIndex = action.payload;

      // Устанавливаем `isActive` равным `true`
      state.isActive = true;
    },

    /**
     * Функция для управления состоянием воспроизведения.
     *
     * @param {Object} state - Текущее состояние приложения.
     * @param {Object} action - Действие, которое вызывает эту функцию.
     * @param {boolean} action.payload - Новое значение состояния воспроизведения.
     */
    playPause: (state, action) => {
      // Устанавливаем `isPlaying` равным `action.payload`
      state.isPlaying = action.payload;
    },

    /**
     * Функция для выбора списка жанов.
     *
     * @param {Object} state - Текущее состояние приложения.
     * @param {Object} action - Действие, которое вызывает эту функцию.
     * @param {number} action.payload - Идентификатор выбранного списка жанов.
     */
    selectGenreListId: (state, action) => {
      // Устанавливаем `genreListId` равным `action.payload`
      state.genreListId = action.payload;
    },
  },
});

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = playerSlice.actions;

export default playerSlice.reducer;
