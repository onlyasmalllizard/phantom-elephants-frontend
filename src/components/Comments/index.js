import React, { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import IndividualComment from "../IndividualComment/index";

export default function Comments({ existingcomments = [] }) {
  const [comments, setComments] = useState(existingcomments);
  const [text, setText] = useState("");
  const user = useUserContext();

  const submitCommentLine = () => {
    const newComment = {
      comment: text,
      author: user.name,
      imageUrl: user.imageUrl,
      date: Date.now,
    };
    setComments([...comments, newComment]);
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Card>
      <CardBody>
        <Comment.Group>
          <div className="w-full">
            <Header as="h3" dividing>
              Comments
            </Header>
          </div>
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
      </CardBody>
    </Card>
  );
}
