import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  countries: [],
  selectedCountry:null,
  loading:false,
  error:null
}

const countrySlice = createSlice({
  name:'country',
  initialState,
  reducers:{
    setCountries(state,action){
      state.countries = action.payload
    },
    setSelectedCountry(state, action){
      state.selectedCountry = action.payload;

    },
    setLoading(state,action){
      state.loading = action.payload
    },
    setError(state,action){
      state.error = action.payload
    }
  }
})


export const {setCountries, setSelectedCountry, setLoading, setError} = countrySlice.actions
export default countrySlice.reducer