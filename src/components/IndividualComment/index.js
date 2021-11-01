import { Comment } from 'semantic-ui-react';

const IndividualComment = ({ imageUrl, author, comment, date }) => {
  return (
    <Comment>
      <Comment.Avatar src={imageUrl} />
      <Comment.Content>
        <Comment.Author as="a">{author}</Comment.Author>
        <Comment.Metadata>
          <div>{date}</div>
        </Comment.Metadata>
        <Comment.Text>{comment}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default IndividualComment;
