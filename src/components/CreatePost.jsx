import axios from "axios";
import React, { useState } from "react";

const CreatePost = () => {

    const [input, setInput] = useState({
        Message: "",
        userId: sessionStorage.getItem("userId")
    });

    const inputHandler = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValues = () => {

        let token = sessionStorage.getItem("token");
        let userId = sessionStorage.getItem("userId");

        let data = {
            ...input,
            userId: userId
        };

        axios.post(
            "http://localhost:3030/create",
            data,
            {
                headers: {
                    "token": sessionStorage.getItem("token"),
                    "Content-Type":"application/json"
                }
            }
        )
        .then((response) => {

            if (response.data.status=="Success") {
                alert("Posted Successfully")
                
            } else {
                alert("Something went wrong")
            }
           

            
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col col-12 col-sm-10 col-md-8 col-lg-6">

                    <div className="card shadow">

                        <div className="card-header bg-primary text-white">
                            <h3 className="text-center">Create Post</h3>
                        </div>

                        <div className="card-body">

                            <div className="mb-3">
                                <label className="form-label">Post a Message</label>
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    name="Message"
                                    value={input.Message}
                                    onChange={inputHandler}
                                ></textarea>
                            </div>

                            <div className="d-grid">
                                <button
                                    className="btn btn-success"
                                    onClick={readValues}
                                >
                                  POST
                                </button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default CreatePost;