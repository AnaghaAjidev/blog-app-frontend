import axios from "axios";
import React, { useState } from "react";

const Signup = () => {

    const [input, setInput] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        cnfpass: ""
    });

    const inputHandler = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValues = () => {

        if (input.password==input.cnfpass) {
            
            let newInput={"name":input.name, phone:input.phone,email:input.email,password:input.password}
            
             axios.post("http://localhost:3030/signup", newInput)
            .then((response) => {
                console.log(response.data)

                if (response.data.status === "success") {
                    alert("Registered Successfully");
                    setInput({
                        name: "",
                        phone: "",
                        email: "",
                        password: "",
                        cnfpass: ""

                    })
                }
                else {
                    alert("Email ID already exist")
                    setInput({
                        name: "",
                        phone: "",
                        email: "",
                        password: "",
                        cnfpass: ""
                    })
                }

            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong");
            });

        } else {
            alert("Password and Confirm Password doesn't match")
        }
        


    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col col-12 col-sm-10 col-md-8 col-lg-6">

                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h3 className="text-center">User Signup</h3>
                        </div>

                        <div className="card-body">

                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={input.name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={input.phone}
                                    onChange={inputHandler}
                                />
                            </div>

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

                             <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="cnfpass"
                                    value={input.cnfpass}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="d-grid">
                                <button
                                    className="btn btn-success"
                                    onClick={readValues}
                                >
                                    REGISTER
                                </button>
                            </div>

                            <div className="d-grid p-3">
                                <button
                                    className="btn btn-primary"
                                >
                                    GO BACK TO LOGIN
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Signup;