import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://shazam-core.p.rapidapi.com/`,
        prepareHeaders: (headers) => {
            // 41fc5464e1mshedb020a30f2f586p10fe3ejsn129f174bec50
            headers.set('X-RapidAPI-Key', '56aec83f15msh46bb270847e4a6dp19df45jsnbcf26cd0fb14')

            return headers
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => 'v1/charts/world' }),
        getSongsByGenre: builder.query({
            query(genre) {
                return `v1/charts/genre-world?genre_code=${genre}`
            }
        }),
        getSongDetails: builder.query({
            query: ({songid}) => `v1/tracks/details?track_id=${songid}`
        }),
        getSongRelated: builder.query({
            query: ({songid}) => `v1/tracks/related?track_id=${songid}`
        }),
        getArtistDetails: builder.query({
            query: ({artistId}) => `v2/artists/details?artist_id=${artistId}`
        }),
        getSongByCountry: builder.query({
            query: (countryCode) => `v1/charts/country?country_code=${countryCode}`
        }),
        getSongsBySearch: builder.query({
            query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`
        })
    })
})

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongByCountryQuery,
    useGetSongsByGenreQuery,
    useGetSongsBySearchQuery
} = shazamCoreApi
