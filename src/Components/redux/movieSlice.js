import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchMovie = createAsyncThunk(
  'MovieSlice/fetchMovie',
  async () => {
    
      const {data} = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=7342ce493de6912d24d892673dd3d323');
      return data.results;
    
  }
);

const initialState = {
  data: [],

};

const MovieSlice=createSlice({
  initialState,
  name:'MovieSlice',
  extraReducers: (builder) => {
    builder
    
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
  
  },
})

export default MovieSlice.reducer;
// export const{}= MovieSlice.actions;