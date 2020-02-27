// import React from 'react'
// import './index.css';
 import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import Icon from '@material-ui/core/Icon';
// import Grid from '@material-ui/core/Grid';
// const CommentExampleComment = () => (
//     <Card className="card" variant="outlined">
//       <Typography align="center"  color="textSecondary" variant="h4">Comments</Typography>
//         <form>
//           <TextField className="textfield" id="outlined-basic" label="Comments" variant="outlined" />
//           <div className="send"><Button  variant="contained" color="primary" endIcon={<Icon>send</Icon>}>Send</Button></div>
//         </form>

//     </Card>
    

    
// )

// export default CommentExampleComment
import React,{useState} from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import Divider from '@material-ui/core/Divider';

const CommentExampleComment = () => {
  const [Like, setLike] = useState(FavoriteBorderIcon);
  const handle = () => {
    if(Like === FavoriteIcon)
      setLike(FavoriteBorderIcon);
    else if(Like === FavoriteBorderIcon)
      setLike(FavoriteIcon);
  }
  return (
  <Comment.Group>
    <Typography  justify="center" color="textSecondary"><h1>Comments </h1></Typography>

    <Comment>
      <Comment.Avatar src='https://picsum.photos/200/300?grayscale' />
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Divider  />
      </Comment.Content>
    </Comment>
    <Comment>
      <Comment.Avatar src='https://picsum.photos/200/300?grayscale' />
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Divider  />
      </Comment.Content>
    </Comment>
    

    <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
  )
}

export default CommentExampleComment

