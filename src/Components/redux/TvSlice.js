import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchTv = createAsyncThunk(
  'TvSlice/fetchTv',
  async () => {
    
      const {data} = await axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=7342ce493de6912d24d892673dd3d323');
      return data.results;
    
  }
);




const initialState = {
  tv: [],

};

const TvSlice=createSlice({
  initialState,
  name:'TvSlice',
  extraReducers: (builder) => {
    builder
    
      .addCase(fetchTv.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tv = action.payload;
      })
  
  },
})

export default TvSlice.reducer;
// export const{}= MovieSlice.actions;