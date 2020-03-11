import React, { useEffect, useState } from 'react';
import ViewMovie from '../../components/profileMovie';
import ViewProfile from "../../components/profileMovie/viewProfile";
import { getMovieData, getSimilarMovie, getComments, addComment } from '../../actions/moviesAction';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import MyModal from "../../components/commun/modal";

const ViewMovieContainer = (props) => {
    let history = useHistory();
    const { user, getMovieData, getSimilarMovie, movieDetails, similarMovies, comments, getComments, addComment } = props;
    const imdb = props.match.params.imdb;
    const [isOpen, setIsOpen] = useState(false);
    const [hash, setHash] = useState(null);
    const [comment, setComment] = useState(null);
    const [profile, setProfile] = useState({open: false});

    useEffect(() => {
        getMovieData({ type: 'imdb', code: imdb });
        getSimilarMovie({ type: 'imdb', code: imdb });
        getComments({ type: 'imdb', code: imdb })
    }, []);

    const handleWatch = (quality) => {
        setHash(getHash(movieDetails.torrents, quality))
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const getHash = (data, quality) => {
        const url = data[quality].url;
        const hash = url.substr(20, 40)
        return hash;
    }

    const handleMovie = (id) => {
        getMovieData({ type: 'id', code: id });
        getSimilarMovie({ type: 'id', code: id });
        getComments({ type: 'id', code: id })
        history.push(`/view/${imdb}`)
    }

    const handleChangeComment = e => setComment(e.target.value);

    const handleAddComment = () => {
        comment && comment.length < 50 && addComment({ code: movieDetails.imdbID, user_id: user.id, content: comment });
    }

    const handleViewClose = () => {
        setProfile({open: false});
    }

    const handleVp = (user) => {
        setProfile({open: true, user: user});
    }

    return (
        <>
            <ViewMovie
                movieDetails={movieDetails} hash={hash} isOpen={isOpen} handleClose={handleClose}
                handleWatch={handleWatch} similarMovies={similarMovies} handleMovie={handleMovie}
                comments={comments} handleAddComment={handleAddComment} handleChangeComment={handleChangeComment}
                handleVp={handleVp}
            />
            {profile.open &&
                <MyModal isOpen={profile.open} handleClose={handleViewClose}>
                    <ViewProfile user={profile.user} />
                </MyModal>}
        </>
    )
}

const mapStateToProps = (state) => ({
    "user": state.user,
    "movieDetails": state.movieDetails,
    "similarMovies": state.similarMovies.results,
    "comments": state.comments,
});
const mapDispatchToProps = {
    "getMovieData": getMovieData,
    "getSimilarMovie": getSimilarMovie,
    "getComments": getComments,
    "addComment": addComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewMovieContainer);