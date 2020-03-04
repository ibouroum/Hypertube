import React from 'react'
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Tooltip from '@material-ui/core/Tooltip';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Button from '@material-ui/core/Button';
import Comment from './comment'
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
    {img : "https://picsum.photos/200/300?grayscale",title : "ismail"},
    {img : "https://picsum.photos/200/300?grayscale",title : "ismail"},
];
const useStyles = makeStyles(theme => ({
      gridList: {
        flexWrap: 'nowrap',

      },
      title: {
        color: theme.palette.primary.light,
      },
      titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
      button : {
          margin : 10,
          
          
      }  
  }));
const ViewMovie = (props) => {
  const {movieDetails} = props;
  const movieInfo = movieDetails.movieInfo
  console.table(movieDetails.movieInfo)
    const classes = useStyles();
    return (
      <div className="root">
        <Grid  container spacing={3}>
          <Grid item container  justify="center" xs={12} sm={3} >
            <img  src="https://picsum.photos/200/300?grayscale" className="image"  />
            <Button className={classes.button} variant="contained" color="primary"  startIcon={<YouTubeIcon />}>Trailer</Button>
            <Button className={classes.button}  variant="contained" color="primary"  startIcon={<PlayCircleFilledIcon />}>Watch</Button>
          </Grid>
          <Grid item xs={12} sm={8}>
            <List>
              <Typography color="textSecondary" variant="h2" align="center">das</Typography>
              <Divider />
              <ListItem  >
                <Typography color="textSecondary" variant="h4" >Description </Typography>
              </ListItem>
              <ListItem >
                <Typography variant="h6">Dans les années 1980, à Gotham City, Arthur Fleck, un comédien de stand-up raté est agressé alors qu'il ère dans les rues de la ville déguisé en clown. Méprisé de tous et bafoué, il bascule peu à peu dans la folie pour devenir le Joker, un dangereux tueur psychotique.</Typography>
              </ListItem>
              <Divider light />
              <ListItem  >
                <Typography color="textSecondary" variant="h4" >Genres </Typography>
              </ListItem>
              <ListItem >
                <Typography variant="h6">Romance, Action, Drama</Typography>
              </ListItem>
              <Divider light />
              <ListItem  >
                <Typography color="textSecondary" variant="h4" >Year </Typography>
              </ListItem>
              <ListItem >
                <Typography variant="h5"  >2016</Typography>
              </ListItem>
              <Divider light />
              <ListItem  >
                <Typography color="textSecondary" variant="h4" >Actors </Typography>
              </ListItem>
              <Divider light />
              <GridList className={classes.gridList} cols={4}>
                {tileData.map((tile,index) => (
                  <GridListTile key={index}>
                    <img src={tile.img} alt={tile.title}/>
                    <Tooltip title="ismail bouroummana hamza" aria-label="add">
                      <GridListTileBar/>
                    </Tooltip>
                  </GridListTile>
                ))}
              </GridList>  
            </List>
          </Grid>
          <Grid item xs={12}>
            <Comment />
          </Grid>
          <Grid item xs={12}>
          <Typography color="textSecondary" variant="h4" >Similaires </Typography>
             <GridList className={classes.gridList} cols={6}>
                {tileData.map((tile,index) => (
                  <GridListTile key={index}>
                    <img src={tile.img} alt={tile.title}/>
                  </GridListTile>
                ))}
            </GridList>
          </Grid>
        </Grid> 
      </div>
    )
  }

export default ViewMovie;
