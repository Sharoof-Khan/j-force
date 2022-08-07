import React, { useEffect, useState } from 'react'
import Style from './viewpost.module.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Card from './Cards'
import Navbar from './Sidebar'
import Sidebar from './SideMenu'

const ViewPost = () => {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
const curruser = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        // axios.get(`http://localhost:4000/posts`)
        axios.get(`https://j-force.herokuapp.com/posts`)
            .then(res => {

                const post = [];
                // setPosts(res.data)
                res.data.map((el) => (
                    el.author === curruser ? post.push(el) : null
                )
                )

                setPosts(post);
                    
        
            }
            )
        
    }, [posts])
    

    const handleDelete = (id) => {
        // axios.delete(`http://localhost:4000/posts/${id}`)
        axios.delete(`https://j-force.herokuapp.com/posts/${id}`)
            .then(res => {
                setPosts(posts.filter(post => post.id !== id))
            }
        )
    }

   

    const handleEdit = (id) => {
        localStorage.setItem('currpost', id)
        // alert(id,'id')
        navigate(`/updatepost`)

    }

  return (
      <div>
          {/* <Navbar /> */}
          <Sidebar/>
          {/* <h1 style={{textAlign:'center'}}>Your Feeds</h1> */}
          <div className={Style.viewPostContainer}>
              
              {
                posts &&  posts.map(post => {
                      return (
                        //   <div className={Style.post} key ={post.id}>
                        //       <h3>{post.title}</h3>
                        //       <p>Description:  {post.description}</p>
                        //       <p>Date:  { post.date}</p>
                        //       <p> Creater:  {post.author ? post.author : 'Guest'}</p>
                        //       <button onClick={() => handleDelete(post.id)}>Delete</button>
                        //       <button onClick={() =>handleEdit(post.id)}>Update</button>
                        //   </div>
                          
                          <div>
                              
                          
                          <Card
                              title={post.title}
                              description={post.description}
                              date={post.date}
                              author={post.author}
                              approved={post.approved}
                              id={post.id}
                              handleDelete={handleDelete}
                              handleEdit={handleEdit}
                              
                              />
                              
                              </div>

                      )
                  }
                  )
                }
                
              
          </div>
    </div>
  )
}

export default ViewPost