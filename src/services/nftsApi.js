import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const nftApiHeaders = {
    'X-RapidAPI-Host': process.env.REACT_APP_NFTS_RAPIDAPI_HOST,
    'X-RapidAPI-Key': process.env.REACT_APP_NFTS_RAPIDAPI_KEY
};

const createRequest = (url) => ({ url, headers: nftApiHeaders });

export const nftsApi = createApi({
    reducerPath: 'nftsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NFTS_API_URL}),
    endpoints: (builder) => ({
        getNfts: builder.query({
            query: () => createRequest('/collections/30d'),
        }),
    }),
});

export const { useGetNftsQuery } = nftsApi;