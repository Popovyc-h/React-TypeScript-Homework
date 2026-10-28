import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

interface WeatherData {
  name: string
  main: {
    temp: number
    humidity: number
  }
  weather: Array<{
    description: string
    icon: string
  }>
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
}

interface WeatherState {
  data: WeatherData | null
  isLoading: boolean
  error: string | null
}

const initialState: WeatherState = {
  data: null,
  isLoading: false,
  error: null,
}

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',

  async (cityName: string) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`,
    )

    return response.data
  },
)

export const weatherSlice = createSlice({
  name: 'weather',

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.isLoading = true
      state.error = null
    })

    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })

    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message as string
    })
  },
})

export default weatherSlice.reducer
