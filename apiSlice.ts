import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//@ts-ignore
import { API_TOKEN } from '@env'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsearch.p.rapidapi.com' }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ['users'], // Declare a tag type to group related queries/mutations
  endpoints: (builder) => ({
    getUsers: builder.query({
        query: (query) => ({
            url: '/search',
        method: 'Get',
        headers: {
          'X-RapidAPI-Key': API_TOKEN,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
            params: query
      }),
      providesTags: ['users'], // associate the result of this mutation with the "users" tag
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['users'], // invalidate all queries/mutations with the "users" tag when this mutation is executed
    }),
  }),
});

export const {useGetUsersQuery,useCreateUserMutation} = api