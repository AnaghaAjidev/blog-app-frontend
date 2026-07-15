import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {

    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const inputHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const readValues = () => {

        axios.post("http://localhost:3030/signin", input)
            .then((response) => {

                console.log(response.data);

                if (response.data.status === "Success") {

                    sessionStorage.setItem("token", response.data.token);
                    sessionStorage.setItem("userId", response.data.userId);

                    alert("Login Successful");

                    navigate("/create");

                } else {

                    alert(response.data.status);

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
                <div className="col-md-5">

                    <div className="card shadow">

                        <div className="card-header bg-success text-white">
                            <h3 className="text-center">User Login</h3>
                        </div>

                        <div className="card-body">

                            <div className="mb-3">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={input.email}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="mb-3">
                                <label>Password</label>
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

                            <div className="text-center mt-3">
                                <Link to="/signup">
                                    New User? Register Here
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