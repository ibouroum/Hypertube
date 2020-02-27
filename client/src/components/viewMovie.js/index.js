import React from 'react'
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import FolderIcon from '@material-ui/icons/Folder';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Button from '@material-ui/core/Button';
const tileData = [
    {img : "https://picsum.photos/200/300?grayscale",title : "ismail"},
    {img : "https://picsum.photos/200/300?grayscale",title : "ismail"},
    {img : "https://picsum.photos/200/300?grayscale",title : "ismail"},
    {img : "https://picsum.photos/200/300?grayscale",title : "ismail"},
    {img : "https://picsum.photos/200/300?grayscale",title : "ismail"},
    {img : "https://picsum.photos/200/300?grayscale",title : "ismail"},
];

function generate(element) {
    return [0, 1, 2].map(value =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
const useStyles = makeStyles(theme => ({
    
      gridList: {
        flexWrap: 'nowrap',
        
        transform: 'translateZ(0)',
      },
      title: {
        color: theme.palette.primary.light,
      },
      titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
      button : {
          margin : 10
      }
     
      
  }));
const ViewMovie = () => {
    const classes = useStyles();
    return (
      <div class="root">
        <Grid  container spacing={3}>
                
                   
                    <Grid container  justify="center" xs={12}sm={4} >
               
                    <img variant="rounded" src="https://picsum.photos/200/300?grayscale" className="image"  />
                    
                        <Button className={classes.button} variant="contained" color="primary"  startIcon={<YouTubeIcon />}>Trailer</Button>
                        <Button className={classes.button}  variant="contained" color="primary"  startIcon={<PlayCircleFilledIcon />}>Watch</Button>
                 
              
                    </Grid>
                    
                    
 
                
                
           
            <Grid item xs={12} sm={8}  alignItems="center " >
                <List component="nav" className={classes.root} aria-label="mailbox folders">
                    
                      <Typography color="textSecondary" variant="h2" align="center">Joker</Typography>
                    
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
                            {tileData.map(tile => (
                            <GridListTile key={tile.img} >
                                <img src={tile.img} alt={tile.title} />
                                <GridListTileBar
                                title={tile.title}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                                actionIcon={
                                    <IconButton aria-label={`star ${tile.title}`}>
                                    <StarBorderIcon className={classes.title} />
                                    </IconButton>
                                }
                                />
                            </GridListTile>
                            ))}
                        </GridList>
                        
                </List>
            </Grid>
            </Grid>
            
            
        
      </div>
      
    )
}

export default ViewMovie;
