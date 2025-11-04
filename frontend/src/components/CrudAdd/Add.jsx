import { useState } from 'react';
import './Add.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';


const Add = () => {

    const users = {
        fname: "",
        lname: "",
        email: "",
        password: ""
    }

    const [user, setUser] = useState(users);
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        // console.log(user);
    }

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create", user)
            .then((response) => {
                toast.success(response.data.msg, { position: "top-right" });
                navigate("/crud");
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='addUser'>
            <Link to={"/crud"}>Back</Link>
            <h3>Add New User</h3>

            <form className='addUserForm' onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="fname">First Name</label>
                    <input
                        onChange={inputHandler}
                        type="text" id='fname' name='fname'
                        autoComplete='off' placeholder='First Name'
                    />
                </div>

                <div className="inputGroup">
                    <label htmlFor="lname">Last Name</label>
                    <input
                        onChange={inputHandler}
                        type="text" id='lname' name='lname'
                        autoComplete='off' placeholder='Last Name'
                    />
                </div>

                <div className="inputGroup">
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={inputHandler}
                        type="text" id='email' name='email'
                        autoComplete='off' placeholder='Email'
                    />
                </div>

                <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={inputHandler}
                        type="password" id='password' name='password'
                        autoComplete='off' placeholder='Password'
                    />
                </div>

                <div className="inputGroup">
                    <button type='submit'>Add User</button>
                </div>

            </form>
        </div>
    );
};

export default Add;
















