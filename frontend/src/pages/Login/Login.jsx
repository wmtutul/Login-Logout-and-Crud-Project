import './Login.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const Login = () => {

    //const [user, setUser] = useState();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    //-----------1st step----------------
    useEffect(() => {
        fetchUsers();
    }, [])


    const fetchUsers = () => {
        axios
            .get('http://localhost:8000/api/allRegister')
            .then((res) => {
                console.log(res.data)
            })
    }
    
    //-------------2nd step--------------------
    const handleLogin = async(event) => {
        event.preventDefault();
        try{
          const response = await axios.post('http://localhost:8000/api/login', {username, password})
          const token = response.data.token;
          alert('Login successfull')
          setUsername()
          setPassword()
          fetchUsers()
          navigate('/account')
          window.location.reload()
          localStorage.setItem('token',token)
    
        }catch(error){
          console.log('Login Error')
        }
    }

    return (
        <div className='signup_container'>
            <div className='form_side'>
                {/*------ 3rd step----- */}
                <form className='form' onSubmit={handleLogin}>
                    <label >User Name</label><br />
                    <input
                        className='input'
                        type='text'
                        placeholder='User Name'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <br />
                    <label >Password</label><br />
                    <input
                        className='input'
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <br />
                    <button className='btn' type="submit">Login</button>
                </form>
            </div>
            <div className='heading_side'>
                <h2>LOGIN</h2>
            </div>
        </div>
    );
};

export default Login;




