import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type LoginPayload = {
  username: string
  password: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://apicrm.mahogany.com.br/rest'
  }),
  endpoints: (builder) => ({
    login: builder.mutation<any, LoginPayload>({
      query: (body) => ({
        url: 'api/oauth2/v1/token',
        method: 'POST',
        body: { ...body, grant_type: 'password' }
      })
    })
  })
})

export const { useLoginMutation } = api

export default api
