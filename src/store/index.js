import {configureStore, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";
import {API_KEY, API_URL} from "../utils/constants";

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
}

export const getGenres = createAsyncThunk("netflix/genres", async () => {
    const {data : {genres}} = await axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}`);
    // console.log(data);
    return genres;
});

const createArrayFromRawData = (rawData, moviesArray, genres) => {
    rawData.forEach((movie) => {
        const movieGenres = []
        movie.genre_ids.forEach((genreId) => {
            const genre = genres.find(({id}) => id === genreId);
            if (genre) movieGenres.push(genre.name);
        });
        if (movie.backdrop_path) {
            moviesArray.push({
                id: movie.id,
                name: movie?.original_name ? movie?.original_name : movie?.original_title,
                image: movie.backdrop_path,
                genres: movieGenres.slice(0, 3),
            });
        }
    });
}

const getRawData = async (api, genres, paging = false) => {
    const moviesArray = [];
    for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
        const {data: {results}} = await axios.get(`${api}${paging ? `&page=${i}` : ''}`);
        // moviesArray.push(...results);
        createArrayFromRawData(results, moviesArray, genres);
    }
    return moviesArray;
}

export const fetchMovies = createAsyncThunk("netflix/trending", async ({type}, thunkAPI) => {
    const {netflix: {genres}} = thunkAPI.getState();
    return getRawData(`${API_URL}/trending/${type}/week?api_key=${API_KEY}`, genres, true);
});

const NetflixSlice = createSlice({
    name: 'Netflix',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genresLoaded = true;
            state.genres = action.payload;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
        }
        );
    }
});

export const store = configureStore({
    reducer: {
        netflix: NetflixSlice.reducer,
    },
});
