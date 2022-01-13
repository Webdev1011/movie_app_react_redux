import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
  loading: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      return { ...state, loading: true };
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload, loading: false };
    },
    [fetchAsyncMovies.rejected]: (state) => {
      return { ...state, loading: false };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload, loading: false };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      return { ...state, selectedMovieOrShow: payload, loading: false };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getLoadingStatus = (state) => state.movies.loading;
export const getMovieOrShowsDetail = (state) =>
  state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
