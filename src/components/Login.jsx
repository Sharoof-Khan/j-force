import React, { useEffect, useState } from 'react'
import Style from './login.module.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {

    const navigate = useNavigate()
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: '',
    })

    const [user,setUser] = useState([])
    const handleChane = (e) => {
        e.preventDefault()
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value

        })
    }


    useEffect(() => {
        // axios.get('http://localhost:4000/user')
        axios.get('https://j-force.herokuapp.com/user')
            .then(res => {
                setUser(res.data)
            }
        )
    }, [])
        

    const handleLogin = (e) => {
        e.preventDefault()
        // console.log(loginForm)
        const userName = user.find(userN => userN.username === loginForm.username && userN.password === loginForm.password)
        if (userName) {
            console.log(userName)
            localStorage.setItem('user', JSON.stringify(userName.username))
            // localStorage.setItem('user',(userName.username))
            
            alert(`Welcome ${userName.username}`)
            navigate('/feed')
        }
        else {
            alert('Invalid Username or Password')
        }


    }
  return (
      <>
          <form >
              <input type="text" placeholder='USERNAME' name = 'username' onChange={handleChane} required />
              <input type="password" placeholder='PASSWORD' name = 'password'  onChange={handleChane} required/>
              <button onClick={handleLogin}>LOGIN</button>
              <Link to={"/register"}>
                  <button className={Style.register} >REGISTER</button>
                  
              </Link>
          </form>
      </>
          
    
  )
}

export default Login