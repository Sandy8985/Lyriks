
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamTrackApi = createApi({
  reducerPath: 'shazamTrackApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '7c79110469msh38c012d150eee0bp14e093jsn944fe5958f4c',
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopTracks: builder.query({ query: () => '/charts/track' }),
  }),
});

export const { useGetTopTracksQuery } = shazamTrackApi;
