export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_ERROR = "GET_MOVIES_ERROR";
export const GET_MOVIE_DATA = "GET_MOVIE_DATA"
export const GET_MOVIE_DATA_SUCCESS = "GET_MOVIE_DATA_SUCCESS"
export const GET_MOVIE_DATA_ERROR = "GET_MOVIE_DATA_ERROR"
export const GET_SIMILAR_MOVIES = "GET_SIMILAR_MOVIES"
export const GET_SIMILAR_MOVIES_SUCCESS = "GET_SIMILAR_MOVIES_SUCCESS"
export const GET_SIMILAR_MOVIES_ERROR = "GET_SIMILAR_MOVIES_ERROR"
export const GetMovies = (filter) => ({
    "type":  GET_MOVIES,
    filter,
});

export const GetMoviesSuccess = (data) => ({
    "type":  GET_MOVIES_SUCCESS,
    data: data,
});

export const GetMoviesError = (error) => ({
    "type":  GET_MOVIES_ERROR,
    error: error,
});
export const getMovieData = (data) => ({
    "type":  GET_MOVIE_DATA,
    data
});
export const getMovieDataSuccess = (data) => ({
    "type":  GET_MOVIE_DATA_SUCCESS,
    data
});
export const getMovieDataError = (error) => ({
    "type":  GET_MOVIE_DATA_ERROR,
    error
});
export const getSimilarMovie = (data) => ({
    "type":  GET_SIMILAR_MOVIES,
    data
});
export const getSimilarMoviesSuccess = (data) => ({
    "type":  GET_SIMILAR_MOVIES_SUCCESS,
    data
});
export const getSimilarMoviesError = (error) => ({
    "type":  GET_SIMILAR_MOVIES_ERROR,
    error
});

