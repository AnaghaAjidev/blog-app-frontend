import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.clear();
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <Link className="navbar-brand fw-bold" to="/viewall">
                    📝 Blog App
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav me-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/create">
                                Create Post
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/viewall">
                                View All Posts
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/viewmypost">
                                My Posts
                            </Link>
                        </li>

                    </ul>

                    <button
                        className="btn btn-danger"
                        onClick={logout}
                    >
                        Logout
                    </button>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;