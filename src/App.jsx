import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/SignUp";
import SignIn from "./components/SignIn";
import CreatePost from "./components/CreatePost";
import Viewall from "./components/Viewall";
import ViewMyPost from "./components/ViewMyPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/viewall" element={<Viewall />} />
        <Route path="/viewmypost" element={<ViewMyPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;