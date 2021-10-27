import React, { useState } from 'react';
import { useUserContext } from '../contexts/UserContext';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import IndividualComment from './IndividualComment';

export default function CommentsBox(props) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');
  const user = useUserContext();

  const submitCommentLine = () => {
    const newComment = {
      comment: text,
      author: user.name,
      imageUrl: user.imageUrl,
      date: Date.now,
    };
    setComments([...comments, newComment]);
    setText('');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Comment.Group>
      <Header as="h3" dividing>
        Comments
      </Header>
      {comments.map((comment) => (
        <IndividualComment
          imageUrl={comment.imageUrl}
          author={comment.author}
          comment={comment.comment}
          date={comment.date}
        />
      ))}
      <Form reply>
        <Form.TextArea onChange={handleChange} value={text} />

        <Button
          onClick={submitCommentLine}
          content="Add Reply"
          labelPosition="left"
          icon="edit"
          primary
        />
      </Form>
    </Comment.Group>
  );
}
