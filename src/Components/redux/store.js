import { configureStore } from "@reduxjs/toolkit";
import TvSlice from "./TvSlice";
import movieSlice from "./movieSlice";
import personSlice from "./personSlice";

const store = configureStore({
  reducer: {
    data: movieSlice,
    tv: TvSlice,
    person: personSlice,
  },
});

export default store;
