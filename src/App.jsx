import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import UserDetail from "./components/UserDetails";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">User Directory</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </>
  );
}
