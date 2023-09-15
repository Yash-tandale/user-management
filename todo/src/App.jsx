import { useEffect } from "react";
import "./App.css";
import CreateUser from "./CreateUser";
import Users from "./Users.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/userSlice";
import UpdateUser from "./UpdateUser";

function App() {
  const dispatch = useDispatch();
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users/");
      dispatch(getUser(response.data));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/update-user/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
