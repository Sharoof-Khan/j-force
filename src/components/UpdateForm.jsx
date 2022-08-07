import axios from 'axios'
import React, {  useState } from 'react'
import Style from './createpost.module.css'
import {useNavigate} from 'react-router-dom'

const UpdatePost = () => {
const navigate = useNavigate()
    const [addForm, setAddForm] = useState({
        title: '',
        description: '',
        date: '',
        author : ""

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

    // useEffect(() => {

        
          
    // }, [addForm])
    

   const handleCreatePost = (e) => {
        e.preventDefault()
       console.log(addForm)
       const id = localStorage.getItem('currpost')
    //    axios.post(`http://localhost:4000/posts/${id}`, addForm)
       axios.patch(`https://j-force.herokuapp.com/posts/${id}`, addForm)
       
       setAddForm({
           title: '',
           description: '',
           date: ''
       })
       
       navigate('/posts')
       localStorage.removeItem('currpost')
        
    }


  return (
      <div className={Style.container}>
          <form>
              <input type="text" name='title' value={addForm.title} placeholder='Title' onChange={handleChane} />
              <input type={"text"} name='description' value={addForm.description} placeholder='Description of Topic' onChange={handleChane} />
              
              <button onClick={handleCreatePost}>Update Your Thought</button>
          </form>
          {/* <p>{ Date().toString()}</p> */}
    </div>
  )
}

export default UpdatePost