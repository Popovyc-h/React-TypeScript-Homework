import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Contact {
  id: number
  name: string
  phone: string
  email: string
  isFavorite: boolean
}

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),

  tagTypes: ['Contacts'],

  endpoints: (builder) => ({
    getContacts: builder.query<Contact[], void>({
      query: () => 'contacts',
      providesTags: ['Contacts'],
    }),

    addContact: builder.mutation<Contact, Omit<Contact, 'id'>>({
      query: (newContact) => ({
        url: 'contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation<void, number>({
      query: (id) => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),

    toggleFavorite: builder.mutation<Contact, { id: number; isFavorite: boolean }>({
      query: ({ id, ...patch }) => ({
        url: `contacts/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
})

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation, useToggleFavoriteMutation } =
  contactApi
