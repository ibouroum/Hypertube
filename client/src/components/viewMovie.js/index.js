import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './index.css';
import { DialogContent, Grid } from '@material-ui/core';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
const ViewMovie = () => {
    return (
      
        <div class="container">
            <img class ="image" alt="images" src="https://picsum.photos/200/300?grayscale"/>
            <div class="overlay">
                <PlayCircleFilledWhiteIcon class="icone"/>
            </div>
            <Rating  defaultValue={2.5} precision={0.5} readOnly />
          <Typography>Inception</Typography>
            <Typography>Genre</Typography>
            <Typography>Année de production</Typography>
            <Typography>Durée</Typography>
            </div>
    )
}

export default ViewMovie;
