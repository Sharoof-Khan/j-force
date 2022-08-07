import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Style from './admin.module.css'

const Admin = () => {
  const [post, setPost] = useState([])
  // const [aprove,setApruve] = useState(false)
  useEffect(() => {
    // axios.get('http://localhost:4000/posts')
    axios.get('https://j-force.herokuapp.com/posts')
      .then(res => {
        setPost(res.data)
      }
    )
  }, [post])

  const handleDelete = (id) => {
    // axios.delete(`http://localhost:4000/posts/${id}`)
    axios.delete(`https://j-force.herokuapp.com/posts/${id}`)
      .then(res => {
        setPost(post.filter(post => post.id !== id))
      }
    )
  }



  const handleAprove = (id) => {
    
    // setApruve(true)
    
    // axios.patch(`http://localhost:4000/posts/${id}`, {
      axios.patch(`https://j-force.herokuapp.com/posts/${id}`, {
        approved: true
      })
      alert(`Post Aprove ${id}`)

  }

  return (
    <div className={Style.adminContainer}>
      <h1 style={{ textAlign: 'center' }}>Welcome Admin</h1>
      <h1>Total Posts { post.length}</h1>
      {post.map(post => {
        return (
          <div key={post.id} className = {Style.postCard}>
            <h3>{post.title}</h3>
            <p>Description:  {post.description}</p>
            <p>Date:  {post.date}</p>
            <p>Creater:  {post.author ? post.author : 'Guest'}</p>
            <p>{post.approved?'Approved':'Pending' }</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            {/* <button onClick={() => handleAprove(post.id)  post.approved?isdable()}>Aprove</button> */}
            <button onClick={() => handleAprove(post.id)  } disabled= {post.approved }>Aprove</button>
          </div>
        )
      }
        
        )}

    </div>
  )
}

export default Admin