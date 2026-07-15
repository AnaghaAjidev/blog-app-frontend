import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {

    const navigate=useNavigate()

    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const inputHandler = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValues = () => {

        axios.post("http://localhost:3030/signIn", input)
            .then((response) => {
                console.log(response.data)
                if(response.data.status=="Incorrect Password")
                {
                    alert ("Incorrect Password")
                } else if(response.data.status=="Invalid Email ID"){
                    alert ("Invalid Email ID")
                } else {
                    let token=response.data.token
                    let userId=response.data.userId

                    console.log(userId)
                    console.log(token)

                    sessionStorage.setItem("userId",userId)
                    sessionStorage.setItem("token",token)

                    navigate("/create")
                }

            })
            .catch((error) => {

                console.log(error);
                alert("Something went wrong");

            });

    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col col-12 col-sm-10 col-md-8 col-lg-5">

                    <div className="card shadow">

                        <div className="card-header bg-success text-white">
                            <h3 className="text-center">User Sign In</h3>
                        </div>

                        <div className="card-body">

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={input.email}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={input.password}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="d-grid">
                                <button
                                    className="btn btn-success"
                                    onClick={readValues}
                                >
                                    SIGN IN
                                </button>
                            </div>

                            <div className="d-grid p-3">
                                <Link to="/signUp" className="btn btn-primary">
                                    NEW USERS CLICK HERE
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default SignIn;