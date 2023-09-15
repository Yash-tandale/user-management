import { useState } from "react";
import "./App.css";
import axios from "axios";
import { addUser } from "./redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../helper/helper.jsx";

const CreateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${BASE_URL}/users/create-user`, {
      name,
      email,
      age,
    });
    dispatch(addUser(response.data));
    alert("User Added !!");
    navigate("/");
  };

  return (
    <div className="create-user-div">
      <form onSubmit={handleSubmit}>
        <h2>Add User</h2>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default CreateUser;
