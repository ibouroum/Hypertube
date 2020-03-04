import React ,{useEffect,useState}from 'react'
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
const mapDispatchToProps = {
    "getMovieData": getMovieData
};
const mapStateToProps = (state) =>({
    "movieDetails" : state.movieDetails, 
});



export default connect(mapStateToProps,mapDispatchToProps)(ViewMovieContainer);
