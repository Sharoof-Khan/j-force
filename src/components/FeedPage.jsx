import React from 'react'
import Style from './feedpage.module.css'
import {Link,useNavigate} from 'react-router-dom'
const FeedPage = () => {
    const navigate = useNavigate()
    const handleCreate = (e) => {
        e.preventDefault()
        navigate('/createPost')
        
    }

    const handleViewPost = (e) => {
        e.preventDefault()
        navigate('/posts')
    }

    const handleOtherUserPosts = (e)=>{
        e.preventDefault()
        navigate('/otheruserposts')
    }
  return (
      <div className={Style.feedPageContainer}>
          <button onClick={handleCreate}>Create Post</button>
          <button onClick={handleViewPost}>View My Post</button>
          <button onClick={handleOtherUserPosts}>View other User Post</button>
          
    </div>
  )
}

export default FeedPage