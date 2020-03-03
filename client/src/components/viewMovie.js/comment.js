import Typography from '@material-ui/core/Typography';
import React,{useState} from 'react'
import { Button, Comment, Form } from 'semantic-ui-react'
import Divider from '@material-ui/core/Divider';
import './index.css'
const CommentExampleComment = () => {
  
  return ( 
  <Comment.Group>
    <Typography color="textSecondary" variant="h4" >Comments </Typography>
    <Comment>
      <Comment.Avatar  src='https://picsum.photos/200/300?grayscale' />
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Divider  />
      </Comment.Content>
    </Comment>
    <Divider  />
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
      <Form.TextArea className="commentTextField"/>
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
  )
}

export default CommentExampleComment

