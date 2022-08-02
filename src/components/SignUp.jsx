import React, { useEffect, useState } from 'react'
import SignUpStyle from './signup.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

    const [user,setUser] = useState([])

    const [adForm, setAddForm] = useState({
        username: '',   
        password: '',
        email: '',
        phone: '',
        role: '',


    })

    const [selectRole,setSelectRole] = useState('')


    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/login')

    }


    const handleChange = (e) => {
        e.preventDefault()
        setAddForm({
            ...adForm,
            [e.target.name]: e.target.value,
            
        })
    }


    useEffect(() => {

        // axios.get('http://localhost:4000/user')
        axios.get('https://j-force.herokuapp.com/user')
            .then(res => {
                // console.log(res.data)
                setUser(res.data)
            }
                
        )

    },[])

    const handleregister = (e) => {
        e.preventDefault()

        // setAddForm({
        //     ...adForm,
        //     [e.target.name]: e.target.value,
            // role:selectRole
            
            
        // })

        const userName = user.find(userN => userN.username === adForm.username)
        if (userName) {
            alert('Username already exists')
            navigate('/login');
        }


        // console.log(adForm, 'data');
        
     

        axios.post('https://j-force.herokuapp.com/user', adForm)
        navigate('/login')



    }
  return (
      <div className={SignUpStyle.container}>
          <form >
              <input type="text" placeholder='USERNAME' name='username' onChange={handleChange} required />
              <input type="password" placeholder='PASSWORD' name='password' onChange={handleChange} required />
              <input type={'email'} placeholder=' EMAIL'  name = 'email'onChange={handleChange} required />
              <input type='tel' placeholder='PHONE NO' name='phone' onChange={handleChange} required />
              {/* <select className={SignUpStyle.drpdown} name = 'role' value={selectRole} onChange = {(e) =>setSelectRole(e.target.value)}> */}
              <select className={SignUpStyle.drpdown} name = 'role' value={adForm.role} onChange = {handleChange}>
                  <option  > Role Dropdown</option>
                  <option value={'react'}> React Developer</option>
                  <option value={'fullstack'} > Full Stack Developer</option>
                  <option value={'java'} > Java Developer</option>
                  <option value={'node'} > Node Developer</option>
              </select>
              <button onClick={handleLogin} >LOGIN</button>
              <button className={SignUpStyle.register} onClick={handleregister}>REGISTER</button>
            </form>
    </div>
  )
}

export default SignUp