import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import Home from "../../components/Home";
import {GetMovies} from '../../actions/moviesAction';
import { useHistory } from "react-router-dom";
import {resetMoviesState} from '../../actions/resetStateAction';

const HomeContainer = (props) => {
    let history = useHistory();
    const {movies, getMovies, reset} = props;
    const [filter, setFilter] = useState({
        page: 1,
        title: null,
        sortBy: null,
        category: null,
    });
    useEffect(() => {
        getMovies(filter);
        setFilter({...filter, page: filter.page + 1});
        return () => reset()
    }, []);
    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            if(movies.status === 'success' && history.location.pathname === '/'){
                //console.log(filter);
                getMovies(filter);
                if(filter.sortBy === null && filter.category === null)
                    setFilter({...filter, page: filter.page + 1});
            }
        }
    };
    const handleMovie = (data) => {
        //console.log(data.imdb_id)
        document.documentElement.scrollTop = 0;
        history.push(`/view/${data.imdb_id}`);
    }
    const handleChangeSearch = (e) => {
        setFilter({
            page: filter.page,
            title: e.target.value,
            sortBy: null,
            category: null,
        })
    }
    const handleSubmitSearch = (e) => {
        filter.title && console.log(filter);
        //search
    }
    const handleChangeCategory = (newValue) => {
        setFilter({
            page: 1,
            title: null,
            sortBy: filter.sortBy,
            category: newValue.value,
        })
        console.log({
            page: 1,
            title: null,
            sortBy: filter.sortBy,
            category: newValue.value,
        });
        
        //setFilter({...filter, page: filter.page + 1});
        //getMovies({...filter, page: 1});
    }
    const handleChangeSort = (newValue) => {
        setFilter({
            page: 1,
            title: null,
            sortBy: newValue.value,
            category: filter.category,
        })
        console.log({
            page: 1,
            title: null,
            category: filter.category,
            sortBy: newValue.value,
        });
        
        //setFilter({...filter, page: filter.page + 1});
    }
    return (
        <div>
            <Home  
                    movies={movies}
                    handleChangeSearch={handleChangeSearch}
                    handleSubmitSearch={handleSubmitSearch}
                    handleChangeCategory={handleChangeCategory}
                    handleChangeSort={handleChangeSort}
                    handleMovie={handleMovie}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
            />
        </div>
    )
}
const mapStateToProps = (state) => (
{
    "user": state.user,
    "movies": state.movies,
});
const mapDispatchToProps = {
    "getMovies" : GetMovies,
    "reset": resetMoviesState,
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);