import React from 'react'
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
const tileData = [
    {img : "https://picsum.photos/200/300?grayscale",title : "ismail"},
    {img : "https://picsum.photos/200/300?grayscale",title : "ismail"},
    {img : "https://picsum.photos/200/300?grayscale",title : "ismail"},
    {img : "https://picsum.photos/200/300?grayscale",title : "ismail"},
    {img : "https://picsum.photos/200/300?grayscale",title : "ismail"},
    {img : "https://picsum.photos/200/300?grayscale",title : "ismail"},

    {img : "https://picsum.photos/200/300?grayscale",title : "ismail"},
    {img : "https://picsum.photos/200/300?grayscale",title : "ismail"},

    {img : "https://picsum.photos/200/300?grayscale",title : "ismail"},
    {img : "https://picsum.photos/200/300?grayscale",title : "ismail"},
];
const useStyles = makeStyles(theme => ({
    gridList: {
      flexWrap: 'nowrap',
      height  :200,
      maxWidth:1200
      //transform: 'translateZ(0)',
    },
  }));
const ViewMovie = () => {
    const classes = useStyles();
    return (
      <div class="root">
      <Grid container justify="center" >
      <Typography align="center">Titre</Typography>
        <Grid item  justify="center" xs={12} sm={6}>
            <img class ="image" alt="images" src="https://picsum.photos/200/300?grayscale"/>
            <div class="overlay"><PlayCircleFilledWhiteIcon class="icone"/></div>
            
        </Grid>
        <Grid item justify="center" xs={12} sm={6}>
        <Rating  defaultValue={2.5} precision={0.5} readOnly />
            
            <Typography>Inception</Typography>
            <Typography>Genre</Typography>
            <Typography>Année de production</Typography>
            <Typography>Durée</Typography>
        </Grid>
        <Grid item xs={12} >
          <GridList className={classes.gridList} cols={4}>
              {tileData.map(tile => (
                  <GridListTile key={tile.img}>
                      <img class="img" src={tile.img} alt={tile.title} />
                      <GridListTileBar
                          title={tile.title}
                      />
                  </GridListTile>
              ))}
          </GridList>
        </Grid>
        <Grid item xs={12} >
          <GridList className={classes.gridList} cols={4}>
              {tileData.map(tile => (
                  <GridListTile key={tile.img}>
                      <img class="img" src={tile.img} alt={tile.title} />
                      <GridListTileBar
                          title={tile.title}
                      />
                  </GridListTile>
              ))}
          </GridList>
        </Grid>
      </Grid>
      </div>
      
    )
}

export default ViewMovie;
