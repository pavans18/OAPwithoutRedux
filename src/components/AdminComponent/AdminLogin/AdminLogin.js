import style from "./AdminLogin.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";




import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { userLogin } from "../../Authentication/authAction";

function AdminLogin() {

    let history = useHistory();

    // auth sllce code------------------

    const dispatch = useDispatch()

    const { register, handleSubmit } = useForm()

    const { userInfo } = useSelector((state) => state.auth)

    const submitForm = (data) => {

        dispatch(userLogin(data))
        history.push("/AdminDashBoard")

        //dispatch(userLogin({ username, password }))

        // if (userInfo.role === "STUDENT") {
        //     history.push("/AdminDashBoard")
        // }
    }



    //-----------------------------------------------


    // const [admin, setAdmin] = useState({
    //     admin_name: "",
    //     admin_password: ""
    // });

    // function handleInput(e) {
    //     setAdmin({
    //         ...admin,
    //         [e.target.name]: e.target.value
    //     }, []);
    // }

    // let history = useHistory();

    // async function login(e) {

    //     const value = await axios.get(`http://localhost:8082/api/user/getUser/${admin.admin_name}`);
    //     if (value.data.username === admin.admin_name) {
    //         if (value.data.password === admin.admin_password) {
    //             alert("Successfully Logged In");
    //             history.push("/AdminDashBoard")
    //         }
    //         else {
    //             alert("Wrong username");
    //         }

    //     }
    // }



    return (
        <div id={style.container}>


            <div id={style.containerHeadingBox}>
                <h1>Admin Login</h1>
            </div>

            <form onSubmit={handleSubmit(submitForm)}>

                <div className='form-group' id={style.emailBox}>
                    <label htmlFor='username'>User Name</label>

                    <input
                        type='text'
                        className='form-input'
                        {...register('username')}
                        required
                    />

                </div>
                <div className='form-group' id={style.passwordBox}>
                    <label htmlFor='password'>Password</label>

                    <input
                        type='password'
                        className='form-input'
                        {...register('password')}
                        required
                    />
                </div>

                <button type='submit' className='btn btn-primary' id={style.login}>Login</button>
            </form>



            {/* <div id={style.emailBox}>
                <label htmlFor="email"> Username
                    <input name="admin_name" onChange={(e) => handleInput(e)} type="text" id={style.email} required />
                </label>
            </div>


            <div id={style.passwordBox}>
                <label htmlFor="password"> Password
                    <input name="admin_password" onChange={(e) => handleInput(e)} type="password" id={style.password} required />
                </label>
            </div>

            <button onClick={(e) => login(e)} id={style.login}>Login</button> */}


            <NavLink to="/" id={style.goBackLink}> Go Back</NavLink>


        </div>
    );
}

export default AdminLogin;