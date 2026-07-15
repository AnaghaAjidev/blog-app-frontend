import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/SignUp";
import SignIn from "./components/SignIn";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;