import style from "./StudentLogin.module.css";
import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import baseUrl from "../../baseUrl";


import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { userLogin } from "../../Authentication/authAction";


function StudentLogin() {

    let history = useHistory();



    ///-----auth slice implementation---------

    const dispatch = useDispatch()

    const { register, handleSubmit } = useForm()

    const submitForm = (data) => {

        dispatch(userLogin(data))
        history.push("/StudentDashBoard");

        //dispatch(userLogin({ username, password }))

        // if (userInfo.roles === "INSTRUCTOR") {
        //     history.push("/AdminDashBoard")
        // }
    }



    //-------------------------------------

    // const [user, setUser] = useState({
    //     email: "",
    //     password: ""
    // });

    // function onTextFieldChange(e) {
    //     setUser({
    //         ...user,
    //         [e.target.name]: e.target.value
    //     });
    // }


    // let history = useHistory();

    // async function handleLogin() {
    //     let value = await axios.get(`http://localhost:8082/api/user/user/${user.email}`);

    //     if (value.data.email === user.email && value.data.password === user.password) {
    //         alert("Successfully Logged In");
    //         sessionStorage.setItem("user", user.email);
    //         history.push("/StudentDashBoard");
    //     } else {
    //         alert("Wrong Credentials");
    //     }
    // }





    return (

        <div id={style.container}>

            <div id={style.containerHeadingBox}>
                <h1>Student Login</h1>
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

            <div id={style.signup}>
                New to Portal?  <NavLink exact to="/StudentSignup"> Register</NavLink>
                <NavLink id={style.goBackLink} exact to="/"> Go Back</NavLink>
            </div>


        </div>



        //     <div id={style.emailBox}>
        //         <label htmlFor="email"> Email
        //             <input name="email"
        //                 onChange={(e) => onTextFieldChange(e)} type="text" id={style.email} />
        //         </label>
        //     </div>


        //     <div id={style.passwordBox}>
        //         <label htmlFor="password"> Password
        //             <input name="password"
        //                 onChange={(e) => onTextFieldChange(e)} type="password" id={style.password} />
        //         </label>
        //     </div>


        //     <button id={style.login} onClick={handleLogin}>Login</button>


        //     <div id={style.signup}>
        //         New to Portal?  <NavLink exact to="/StudentSignup"> Register</NavLink>
        //         <NavLink id={style.goBackLink} exact to="/"> Go Back</NavLink>
        //     </div>


        // </div >
    );
}

export default StudentLogin;