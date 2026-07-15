import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {

    const [input, setInput] = useState({
        Message: ""
    });

    const inputHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const createPost = () => {

        let token = sessionStorage.getItem("token");
        let userId = sessionStorage.getItem("userId");

        axios.post(
            "http://localhost:3030/create",
            {
                userId: userId,
                Message: input.Message
            },
            {
                headers: {
                    token: token
                }
            }
        )
        .then((response) => {

            console.log(response.data);

            if (response.data.status === "Success") {

                alert("Post Created Successfully");

                setInput({
                    Message: ""
                });

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
                            <h3 className="text-center">Create Post</h3>
                        </div>

                        <div className="card-body">

                            <div className="mb-3">
                                <label>Message</label>

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
                                    onClick={createPost}
                                >
                                    CREATE POST
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