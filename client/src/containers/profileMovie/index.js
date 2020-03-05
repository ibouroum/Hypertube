import React ,{useEffect}from 'react'
import ViewMovie from '../../components/profileMovie'
import {getMovieData} from '../../actions/moviesAction';
import {connect} from "react-redux";

const ViewMovieContainer = (props) => {
    const {getMovieData,movieDetails} = props;
    const imdb = props.match.params.imdb;
    useEffect(() => {
        getMovieData(imdb);
    }, []);
    
    return (
        <div>
           <ViewMovie movieDetails={movieDetails}/> 
        </div>
    )
}
const mapStateToProps = (state) =>({
    "movieDetails" : state.movieDetails, 
});
const mapDispatchToProps = {
    "getMovieData": getMovieData,
};

export default connect(mapStateToProps,mapDispatchToProps)(ViewMovieContainer);
