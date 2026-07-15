import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "",
        phone: "",
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

        axios.post("http://localhost:3030/signup", input)
            .then((response) => {

                console.log(response.data);

                if (response.data.status === "success") {

                    alert("Registration Successful");

                    setInput({
                        name: "",
                        phone: "",
                        email: "",
                        password: ""
                    });

                    navigate("/");

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
                <div className="col-md-6">

                    <div className="card shadow">

                        <div className="card-header bg-primary text-white">
                            <h3 className="text-center">User Registration</h3>
                        </div>

                        <div className="card-body">

                            <div className="mb-3">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={input.name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="mb-3">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={input.phone}
                                    onChange={inputHandler}
                                />
                            </div>

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
                                    className="btn btn-primary"
                                    onClick={readValues}
                                >
                                    SIGN UP
                                </button>
                            </div>

                            <div className="text-center mt-3">
                                <Link to="/">
                                    Already have an account? Login
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;