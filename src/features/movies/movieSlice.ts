import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi';
import  { APIKEY } from '../../common/apis/movieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async(movie: string) => {
        const response = await movieApi.get(
                        `?apiKey=${APIKEY}&s=${movie}&type=movie`
                        );
        return response.data;
    }
);

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async(show: string) => {
        const response = await movieApi.get(
                        `?apiKey=${APIKEY}&s=${show}&type=series`
                        );
        return response.data;
    }
);

export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetails",
    async(id:any) => {
        const response = await movieApi.get(
                        `?apiKey=${APIKEY}&i=${id}&plot=full`
                        );
        return response.data;
    }
);

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
}
const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{
        removeSelectedMovieOrShow:(state) =>{
            state.selectedMovieOrShow= {}
        }
    },
    extraReducers: (builder ) => {
        builder.addCase(fetchAsyncMovies.pending, () => {
            console.log('pending')
        }),
        builder.addCase(fetchAsyncMovies.fulfilled, (state: any, {payload}: any ) => {
            return {...state, movies: payload}
        }),
        builder.addCase(fetchAsyncMovies.rejected, () => {
            console.log('Rejected')
        }),
        builder.addCase(fetchAsyncShows.fulfilled, (state: any, {payload}: any ) => {
            console.log(payload)
            return {...state, shows: payload}
        })
         builder.addCase(fetchAsyncMovieOrShowDetails.fulfilled, (state: any, {payload}: any ) => {
            console.log(payload)
            return {...state, selectedMovieOrShow: payload}
        })
    },
});

export const {removeSelectedMovieOrShow} = movieSlice.actions
export const getAllMovies = ((state: { movies: { movies: any; }; }) => state.movies.movies);
export const getAllShows = ((state: { movies: { shows: any; }; }) => state.movies.shows);
export const getSelectedMovieOrShow = (state: { movies: { selectedMovieOrShow: any; }; }) => state.movies.selectedMovieOrShow;

export default movieSlice.reducer;

