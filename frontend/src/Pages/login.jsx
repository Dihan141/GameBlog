import React from 'react'
import { useState } from 'react'
import API_BASE_URL from '../Config/config';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleNormalLogin = () => {
        const url = `${API_BASE_URL}/api/auth/login`
        const data = {
            email,
            password
        }

        axios.post(`${API_BASE_URL}/api/auth/login`, data)
        .then((response) => {
            const user = response.data.User
            const localData = {
                name: user
            }

            localStorage.setItem('user', JSON.stringify(localData))
            navigate('/dashboard')
        })
        .catch(error => console.log(error))
    }

    const handleGoogleLogin = () => {
        window.open(`${API_BASE_URL}/api/auth/google-login`, "_self")
    }
  return (
    <div>
    <h2>Login</h2>
    <form>
      <label>Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="button" onClick={handleNormalLogin}>Login</button>
    </form>

    <h2>Google Login</h2>
    <button type="button" onClick={handleGoogleLogin}>Login with Google</button>
  </div>
  )
}

export default Login