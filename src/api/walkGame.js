import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const gameSize = {
  "width": 1,
  "height": 1
}

export const api = createApi({
  reducerPath: 'walkingMan',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_WALKGAME_BASE_URL}`,
  }),
  endpoints: (builder) => ({
    startGame: builder.mutation({
      query: () => ({
        url: '/game',
        method: 'POST',
        body: gameSize,
      })
    }),
  })
})

export const {useStartGameMutation} = api;


