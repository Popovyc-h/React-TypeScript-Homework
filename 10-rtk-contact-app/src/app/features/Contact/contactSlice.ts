import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface Contact {
  id: number
  name: string
  phone: string
  email: string
  isFavorite: boolean
}

interface ContactsState {
  items: Contact[]
  isLoading: boolean
  error: string | null
  filter: 'all' | 'favorites'
}

const initialState: ContactsState = {
  items: [],
  isLoading: false,
  error: null,
  filter: 'all',
}

export const fetchContacts = createAsyncThunk<Contact[]>(
  'contacts/fetch',

  async () => {
    const { data } = await axios.get<Contact[]>('http://localhost:3001/contacts')
    return data
  },
)

type NewContact = Omit<Contact, 'id'>

export const addContact = createAsyncThunk<Contact, NewContact>(
  'contacts/add',

  async (contact) => {
    const { data } = await axios.post<Contact>('http://localhost:3001/contacts', contact)
    return data
  },
)

export const deleteContact = createAsyncThunk<number, number>(
  'contacts/delete',

  async (id) => {
    await axios.delete(`http://localhost:3001/contacts/${id}`)
    return id
  },
)

const contactsSlice = createSlice({
  name: 'contacts',

  initialState,

  reducers: {
    toggleFavorite(state, action: PayloadAction<number>) {
      let contact = state.items.find((contact) => contact.id === action.payload)

      if (contact) {
        contact.isFavorite = !contact.isFavorite
      }
    },

    setFilter(state, action: PayloadAction<ContactsState['filter']>) {
      state.filter = action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      ;((state.isLoading = true), (state.error = null))
    })

    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false
      state.items = action.payload
    })

    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false
      state.error = String(action.error.message)
    })

    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload)
    })

    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter((contact) => contact.id !== action.payload)
    })
  },
})

export default contactsSlice.reducer
export const { toggleFavorite, setFilter } = contactsSlice.actions
