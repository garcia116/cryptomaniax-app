import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const nftApiHeaders = {
    'X-RapidAPI-Host': 'top-nft-collections-and-sales.p.rapidapi.com',
    'X-RapidAPI-Key': '946270e733msh112249b12526758p158f7ejsn78d9eec9b237'
};

const createRequest = (url) => ({ url, headers: nftApiHeaders });

export const nftsApi = createApi({
    reducerPath: 'nftsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://top-nft-collections-and-sales.p.rapidapi.com'}),
    endpoints: (builder) => ({
        getNfts: builder.query({
            query: () => createRequest(`/collections/30d`),
        }),
    }),
});

export const { useGetNftsQuery } = nftsApi;