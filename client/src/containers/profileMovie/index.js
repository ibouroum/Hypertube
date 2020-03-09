import React ,{useEffect,useState}from 'react'
import ViewMovie from '../../components/profileMovie'
import {getMovieData,getSimilarMovie} from '../../actions/moviesAction';
import {connect} from "react-redux";
import { Redirect,useHistory } from "react-router-dom";
const ViewMovieContainer = (props) => {
    let history = useHistory();
    const {getMovieData,getSimilarMovie,movieDetails,similarMovies} = props;
    const imdb = props.match.params.imdb;
    const [isOpen,setIsOpen] = useState(false)
    const [hash,setHash] = useState(null)
    useEffect(() => {
        getMovieData({type : 'imdb',code: imdb});
        getSimilarMovie({type : 'imdb',code: imdb});
    }, []);
    const handleWatch= (quality) => {
        
        setHash(getHash(movieDetails.torrents,quality))
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    const getHash = (data,quality) =>{
        const url = data[quality].url;
        const hash = url.substr(20,40)
        return hash;
   }
   const handleMovie = (id) =>{
    
    getMovieData({type : 'id',code: id});
    getSimilarMovie({type : 'id',code: id});
    history.push(`/view/${imdb}`)

        
   }
    return (
        <div>
           <ViewMovie movieDetails={movieDetails} hash={hash} isOpen={isOpen} handleClose={handleClose}
                handleWatch={handleWatch} similarMovies={similarMovies} handleMovie={handleMovie}/> 
        </div>
    )
}
const mapDispatchToProps = {
    "getMovieData": getMovieData,
    "getSimilarMovie" : getSimilarMovie
};
const mapStateToProps = (state) =>({
    "movieDetails" : state.movieDetails,
    "similarMovies" : state.similarMovies.results
});



export default connect(mapStateToProps,mapDispatchToProps)(ViewMovieContainer);
