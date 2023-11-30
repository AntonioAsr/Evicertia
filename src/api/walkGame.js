import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// start game
const gameSize = {
  "width": 10,
  "height": 10
}

// create new player
const player = {
  "username": "TheBestPlayer"
}

// move player
const playerPosition = [
  {
    "operationType": 0,
    "path": "/Position",
    "op": "replace",
    "from": "string",
    "value": { "Row": 1, "Column": 1 }
  }
]

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
    addPlayer: builder.mutation({
      query: () => ({
        url: '/player',
        method: 'POST',
        body: player,
      })
    }),
    movePlayer: builder.mutation({
      query: () => ({
        url: '/player/TheBestPlayer',
        method: 'PATCH',
        body: playerPosition,
      })
    }),
    getPlayerInfo: builder.query({
        query: () => ({
          url: '/player?username=TheBestPlayer',
          method: 'GET',
        })
    }),
    deletePlayer: builder.mutation({
        query: () => ({
          url: '/player',
          method: 'DELETE',
          body: player,
        })
    }),
    getGame: builder.query({
        query: () => ({
          url: '/game',
          method: 'GET',
        })
    }),
  })
})

export const {
  useStartGameMutation,
  useAddPlayerMutation,
  useMovePlayerMutation,
  useGetPlayerInfoQuery,
  useDeletePlayerMutation,
  useGetGameQuery,
} = api;


