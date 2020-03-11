export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_ERROR = "GET_MOVIES_ERROR";
export const GET_MOVIE_DATA = "GET_MOVIE_DATA"
export const GET_MOVIE_DATA_SUCCESS = "GET_MOVIE_DATA_SUCCESS"
export const GET_MOVIE_DATA_ERROR = "GET_MOVIE_DATA_ERROR"
export const GET_SIMILAR_MOVIES = "GET_SIMILAR_MOVIES"
export const GET_SIMILAR_MOVIES_SUCCESS = "GET_SIMILAR_MOVIES_SUCCESS"
export const GET_SIMILAR_MOVIES_ERROR = "GET_SIMILAR_MOVIES_ERROR"
export const UPDATE_SEEN = "UPDATE_SEEN";
export const GET_SEEN_MOVIES = "GET_SEEN_MOVIES"
export const GET_SEEN_MOVIES_EROOR = "GET_SEEN_MOVIES_EROOR"
export const GET_SEEN_MOVIES_SUCCESS = "GET_SEEN_MOVIES_SUCCESS"
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
export const updateSeen = (data) => ({
    "type":  UPDATE_SEEN,
    data
});
export const getSeenMovies = (data) => ({
    "type":  GET_SEEN_MOVIES,
    data
});
export const getSeenMoviesError = (error) => ({
    "type":  GET_SEEN_MOVIES_EROOR,
    error
});
export const getSeenMoviesSuccess = (data) => ({
    "type":  GET_SEEN_MOVIES_SUCCESS,
    data
});