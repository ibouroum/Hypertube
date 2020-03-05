import {
    GET_MOVIE_DATA_SUCCESS,GET_MOVIE_DATA_ERROR
} from "../actions/moviesAction";
  
const DEFAULT_STATE = {
    status: 'default',
    movies: [],
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case GET_MOVIE_DATA_SUCCESS :
            return {status : 'success', movieInfo : action.data }
        case GET_MOVIE_DATA_ERROR :
            return {status : 'error', movieInfo : action.error}  
        default:
          return state;
    }
}