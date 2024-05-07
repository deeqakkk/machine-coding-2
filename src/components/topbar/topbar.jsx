import { useState } from 'react'

const TopBar = ({ onAddComment }) => {
  const [commentText, setCommentText] = useState('')

  function handleCommentChange(value) {
    setCommentText(value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!commentText.trim()) return
    onAddComment(commentText)
    setCommentText('')
  }
  return (
    <div className="topbar-container">
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="user"
        height={50}
        width={50}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          maxLength={200}
          value={commentText}
          placeholder="Join the discussion..."
          onChange={(e) => handleCommentChange(e.target.value)}
        />
        <button type="submit">Add comment</button>
      </form>
    </div>
  )
}

export default TopBar
