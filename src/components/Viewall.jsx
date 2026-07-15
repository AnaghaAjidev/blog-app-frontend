import React, { useEffect, useState } from "react";
import axios from "axios";

const Viewall = () => {

    const [posts, setPosts] = useState([]);

    const fetchData = () => {

        let token = sessionStorage.getItem("token");

        axios.post(
            "http://localhost:3030/viewall",
            {},
            {
                headers: {
                    token: token
                }
            }
        )
        .then((response) => {

            console.log(response.data);

            if (Array.isArray(response.data)) {
                setPosts(response.data);
            } else {
                alert(response.data.status);
            }

        })
        .catch((error) => {

            console.log(error);
            alert("Something went wrong");

        });

    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mt-5">

            <h2 className="text-center mb-4">View All Posts</h2>

            <div className="row">

                {posts.map((value, index) => (

                    <div className="col-md-4 mb-4" key={index}>

                        <div className="card shadow">

                            <div className="card-body">

                                <h5 className="card-title">
                                    Post {index + 1}
                                </h5>

                                <p>
                                    <strong>User ID:</strong><br />
                                    {value.userId}
                                </p>

                                <p>
                                    <strong>Message:</strong><br />
                                    {value.Message}
                                </p>

                                <p>
                                    <strong>Posted Date:</strong><br />
                                    {new Date(value.postedDate).toLocaleString()}
                                </p>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default Viewall;