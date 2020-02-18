import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
//import './home.css'


export default function Home(props) {
    const {movies} = props;
    const handleClick = () => {
        console.log('dfdf')
    }
    return(
        <>
        <Grid container justify="center">
            {movies.movies && movies.movies.map(element =>  (
            <Card className="root" key={element.id || element._id}>
                <div className="container">
                    <img
                        className="media"
                        src={element.background_image_original || element.images.poster} 
                        alt="Avatar"
                        onClick={handleClick}
                    />
                    <div className="overlay">
                        <button className="but"  onClick={handleClick} >More</button>
                        <div className="text">
                            <h1>{element.title_long || element.title + ` (${element.year})`}</h1>
                        </div>
                    </div>
                </div>
            </Card>
            ))}
        </Grid>
        </>
    );
}