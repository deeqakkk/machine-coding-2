import { useState } from 'react'

const CommentItem = ({
  comment,
  onDeleteComment,
  onEditComment,
  onReplyComment,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(comment)
  const [replyText, setReplyText] = useState('')
  const [isReplying, setIsReplying] = useState(false)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSaveEdit = () => {
    onEditComment(comment.id, editedText)
    setIsEditing(false)
  }

  const handleReply = () => {
    setIsReplying(true)
  }

  const handleCancelReplyChange = () => {
    setIsReplying(false)
    setReplyText('')
  }

  const handleReplyChange = (e) => {
    setReplyText(e.target.value)
  }

  const hanldeReplySave = () => {
    console.log('reply getting saved...', replyText)
    setIsReplying(false)
    onReplyComment(comment.id, replyText)
    setReplyText('')
  }
  return (
    <div className="comment-item">
      {isEditing ? (
        <input
          type="text"
          onChange={(e) => setEditedText(e.target.value)}
          value={editedText.text}
        />
      ) : (
        <p>{comment.text}</p>
      )}

      <div>
        {isEditing ? (
          <button onClick={handleSaveEdit}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}

        <button
          onClick={() => {
            onDeleteComment(comment.id)
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            handleReply()
          }}
        >
          Reply
        </button>
        {isReplying && (
          <>
            <input
              value={replyText}
              onChange={handleReplyChange}
              placeholder="Write a reply"
            />
            <button onClick={hanldeReplySave}>Reply</button>
            <button onClick={handleCancelReplyChange}>Cancel</button>
          </>
        )}
      </div>
    </div>
  )
}

export default CommentItem
