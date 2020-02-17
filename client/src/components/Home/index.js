import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import './home.css'

const useStyles = makeStyles(theme => ({
    root: {
        height: 310,
        width: 250,
        maxHeight : 350,
        margin : 5,
        boxShadow: 3,
      },
      media: {
        display: 'block',
        width: '100%',
        height: 310,
      },
}));

export default function Home(props) {
    const {movies} = props;
    const classes = useStyles();
    return(
        <>
        <Grid container justify="center">
            {movies.movies && movies.movies.map(element =>  (
            <Card className={classes.root} key={element.id || element._id}>
                <div className="container">
                    <img
                        className={classes.media}
                        src={element.background_image_original || element.images.poster} 
                        alt="Avatar" 
                    />
                    <div className="overlay">
                        <div className="text">
                            <h1>{element.title_long || element.title + ` (${element.year})`}</h1>
                            <span>{element.synopsis}</span>
                        </div>
                    </div>
                </div>
            </Card>
            ))}
        </Grid>
        </>
    );
}