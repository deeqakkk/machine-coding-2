import CommentItem from '../commentItem/CommentItem'

const CommentList = ({
  comments ,
  onDeleteComment,
  onEditComment,
  onReplyComment,
}) => {

  return (
    <div>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onDeleteComment={onDeleteComment}
          onEditComment={onEditComment}
          onReplyComment={onReplyComment}
        />
      ))}
    </div>
  )
}

export default CommentList