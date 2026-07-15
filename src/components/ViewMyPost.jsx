import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewMyPost = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchMyPosts();
    }, []);

    const fetchMyPosts = async () => {

        const token = sessionStorage.getItem("token");
        const userId = sessionStorage.getItem("userId");
        console.log("Token:", token);
        console.log("UserId:", userId);

        try {

            const response = await axios.post(
                "http://localhost:3030/viewmypost",
                {
                    userId: userId
                },
                {
                    headers: {
                        token: token
                    }
                }
            );

            console.log(response.data);

            if (Array.isArray(response.data)) {
                setPosts(response.data);
            } else {
                setPosts([]);
            }

        } catch (error) {

            console.log(error);
            alert("Unable to fetch your posts");

        }

    };

    return (
        <div>

            <div className="container mt-5">

                <h2 className="text-center mb-4">My Posts</h2>

                <div className="row">

                    {posts.length > 0 ? (

                        posts.map((post, index) => (

                            <div className="col-md-6 mb-4" key={index}>

                                <div className="card shadow h-100">

                                    <div className="card-body">

                                        <h5 className="card-title">
                                            My Post
                                        </h5>

                                        <p className="card-text">
                                            {post.Message}
                                        </p>

                                    </div>

                                    <div className="card-footer">

                                        <strong>Posted Date : </strong>

                                        {new Date(post.postedDate).toLocaleString()}

                                    </div>

                                </div>

                            </div>

                        ))

                    ) : (

                        <div className="text-center">
                            <h5>No Posts Found</h5>
                        </div>

                    )}

                </div>

            </div>

        </div>
    );
};

export default ViewMyPost;