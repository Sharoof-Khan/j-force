import React, { useEffect, useState } from 'react'
import Style from './viewpost.module.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const OtherUserPosts = () => {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    
    useEffect(() => {
        // axios.get(`http://localhost:4000/posts`)
        axios.get(`https://j-force.herokuapp.com/posts`)
            .then(res => {
    

                const post = [];
                res.data.map((el) => (
                        
                         el.author !== user && el.approved ? post.push(el):null
                )
                    
                    
                )

                console.log(post,'post');

                setPosts(post);
                        
                
                }
                )
                
            }, [])
            
            console.log(posts,'posts');
    
    
    

  

   


    const handleYourFeed = () => {
        navigate('/posts')
    }

  return (
      <div>
          <h1 style={{ textAlign: 'center' }}>Your Feeds</h1>
          <button onClick={handleYourFeed} style={{ marginLeft: '45%' }}>View Your Posts</button>
          <h6 style={{ textAlign: 'center' }}> Current User:{JSON.parse(localStorage.getItem('user'))}</h6>
          
          <div className={Style.viewPostContainer}>
              
              {
                posts &&  posts.map(post => {
                      return (
                          <div className={Style.post} key ={post.id}>
                              <h3>{post.title}</h3>
                              <p>Description:  {post.description}</p>
                              <p>Date:  { post.date}</p>
                              <p> Creater:  {post.author ? post.author : 'Guest'}</p>
                              <p className={Style.approved}>approved by admin</p>
                              
                          </div>

                      )
                  }
                  )
              }
              
                
              
          </div>
    </div>
  )
}

export default OtherUserPosts