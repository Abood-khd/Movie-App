import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPeople = createAsyncThunk(
  "personeSlice/fetchPeople",
  async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/person/week?api_key=7342ce493de6912d24d892673dd3d323"
    );
    return data.results;
  }
);

const initialState = {
  person: [],
};

const personeSlice = createSlice({
  initialState,
  name: "personeSlice",
  extraReducers: (builder) => {
    builder.addCase(fetchPeople.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.person = action.payload;
    });
  },
});

export default personeSlice.reducer;
// export const{}= MovieSlice.actions;
