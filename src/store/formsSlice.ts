import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface IContactForm {
  firstName: string
  lastName: string
  address?: string
  postalCode?: string
  city?: string
  email: string
  phone: string
  subject?: string
  message: string
}

interface IInitialState {
  entities: IContactForm[]
  isLoading: boolean
  errors: any
}

const initialState: IInitialState = {
  entities: [],
  isLoading: false,
  errors: {},
}

export const SubmitFormThunkActionCreator = createAsyncThunk(
  'forms/submitContactForm',
  async (formData: Partial<IContactForm>, thunkAPI) => {
    // const response = await axios.post('/api/v1/posts', formData)
    alert(JSON.stringify(formData, null, 2))
    return
    // return response.data
  },
)

const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {},
  extraReducers: {
    [SubmitFormThunkActionCreator.pending as any]: (state, action: PayloadAction<IContactForm>) => {
      state.entities.push(action.payload)
      state.isLoading = true
    },
    [SubmitFormThunkActionCreator.fulfilled as any]: (state, action: PayloadAction<IContactForm>) => {
      state.entities.push(action.payload)
      state.isLoading = false
    },
    [SubmitFormThunkActionCreator.rejected as any]: (state, action: PayloadAction<IContactForm>) => {
      state.entities.push(action.payload)
      state.isLoading = false
      state.errors = { message: 'Error' }
    },
  },
})

export default formsSlice.reducer
