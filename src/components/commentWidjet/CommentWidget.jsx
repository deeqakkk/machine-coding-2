import { useState } from 'react'
import TopBar from '../topbar/topbar'
import CommentList from '../commentList/CommentList'
const CommentWidget = () => {
  const [comments, setComments] = useState([
    {id: 1, text: 'comment1', parentId: null}
  ])


  const handleAddComment = (text, parentId= null) => {

    console.log('handleAddComent', text,)
    const newComment = {
      id: Date.now(),
      text,
      parentId
    }

    setComments([...comments, newComment])
  }

  const handleDeleteComment = (id) => {
    console.log('delete', id)
    setComments(comments.filter((comment) => comment.id !== id))
  }

  const handleEditComment = (id, value) => {
    console.log('save', id, value)
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, text: value } : comment
      )
    )
  }

  const handleReplyComment = (parentId, replyText) => {
    const reply = {
      id: Date.now(),
      text: replyText,
      parentId
    }
    setComments([...comments, reply])
  }

  return (
    <div>
      <h1>Comment Widget</h1>
      <TopBar onAddComment={handleAddComment} />
      <CommentList
        comments={comments}
        onDeleteComment={handleDeleteComment}
        onEditComment={handleEditComment}
        onReplyComment={handleReplyComment}
      />
    </div>
  )
}

export default CommentWidget
