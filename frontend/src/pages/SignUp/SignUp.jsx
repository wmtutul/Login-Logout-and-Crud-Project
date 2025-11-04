import { useEffect, useState } from 'react';
import './SignUp.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const SignUp = () => {

    //const [user, setUser] = useState();
    const [email, setEmail] = useState('');
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
    const handleRegister = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:8000/api/register', { email, username, password })
            .then(() => {
                alert('Registration Successfull')
                setEmail('')
                setUsername('')
                setPassword('')
                fetchUsers()
                navigate('/login')
            })
            .catch(() => {
                console.log('Unable to register user')
            })
    }
    //----------------------------

    return (
        <div className='signup_container'>
            <div className='form_side'>
                {/*------ 3rd step----- */}
                <form className='form' onSubmit={handleRegister}>
                    <label >Email</label><br/>
                    <input 
                        className='input' 
                        type='text'
                        placeholder='Email'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <br />
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
                    <button className='btn' type="submit">Sign Up</button>
                </form>
            </div>
            <div className='heading_side'>
                <h2>SIGNUP</h2>
            </div>
        </div>
    );
};

export default SignUp;




