import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// // Define a service using a base URL and expected endpoints
// export const spotifyApi = createApi({
//   reducerPath: 'spotifyApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spotify.com/v1/' }),
//   endpoints: (builder) => ({
//     getIndividualPlaylist: builder.query<Pokemon, string>({
//       query: (name) => `pokemon/${name}`,
//     }),
//   }),
// })

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = pokemonApi