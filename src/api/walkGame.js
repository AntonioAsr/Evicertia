import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// create new player
const player = {
  username: 'TheBestPlayer1',
};

export const api = createApi({
  reducerPath: 'walkingMan',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_WALKGAME_BASE_URL}`,
  }),
  endpoints: (builder) => ({
    startGame: builder.mutation({
      query: (gameSize) => ({
        url: '/game',
        method: 'POST',
        body: gameSize,
      }),
    }),
    addPlayer: builder.mutation({
      query: () => ({
        url: '/player',
        method: 'POST',
        body: player,
      }),
    }),
    movePlayer: builder.mutation({
      query: (playerPosition) => ({
        url: '/player/TheBestPlayer1',
        method: 'PATCH',
        body: playerPosition,
      }),
    }),
    getPlayerInfo: builder.query({
      query: () => ({
        url: '/player?username=TheBestPlayer',
        method: 'GET',
      }),
    }),
    deletePlayer: builder.mutation({
      query: () => ({
        url: '/player',
        method: 'DELETE',
        body: player,
      }),
    }),
    getGame: builder.query({
      query: () => ({
        url: '/game',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useStartGameMutation,
  useAddPlayerMutation,
  useMovePlayerMutation,
  useGetPlayerInfoQuery,
  useDeletePlayerMutation,
  useGetGameQuery,
} = api;
