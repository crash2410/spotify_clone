import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://shazam-core.p.rapidapi.com/`,
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '41fc5464e1mshedb020a30f2f586p10fe3ejsn129f174bec50')

            return headers
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => 'v1/charts/world' }),

    })
})

export const {
    useGetTopChartsQuery
} = shazamCoreApi
