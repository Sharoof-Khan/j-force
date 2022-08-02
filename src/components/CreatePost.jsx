import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Style from './createpost.module.css'
import {useNavigate} from 'react-router-dom'

const CreatePost = () => {

    const navigate = useNavigate()

    const [addForm, setAddForm] = useState({
        title: '',
        description: '',
        date: '',
        author: "",
        approved: false

    })

    const user = JSON.parse(localStorage.getItem('user'))
    const handleChane = (e) => {
        e.preventDefault()
        setAddForm({
            ...addForm,
            [e.target.name]: e.target.value,
            date: Date().toLocaleString(),

            author: user
        })
    }

    

   const handleCreatePost = (e) => {
        e.preventDefault()
        console.log(addForm)
    //    axios.post(`http://localhost:4000/posts`, addForm)
       axios.post(`https://j-force.herokuapp.com/posts`, addForm)
       
       setAddForm({
           title: '',
           description: '',
           date: ''
       })

       alert('Post Created')

         navigate('/feed')
       
        
    }


  return (
      <div className={Style.container}>
          <form>
              <input type="text" name='title' value={addForm.title} placeholder='Title' onChange={handleChane} />
              <input type={"text"} name='description' value={addForm.description} placeholder='Description of Topic' onChange={handleChane} />
              
              <button onClick={handleCreatePost}>Post Your Thought</button>
          </form>
          {/* <p>{ Date().toString()}</p> */}
    </div>
  )
}

export default CreatePost