import { useState } from "react";
import "./App.css";
import axios from "axios";
import { updateUser } from "./redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const users = useSelector((state) => state.userReducer.users);
  const user = users.find((u) => u.id === id);
  console.log(user);
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [age, setAge] = useState(user.age);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      `http://localhost:5000/users/update-user/${id}`,
      { name, email, age }
    );
    dispatch(updateUser({ id, name, email, age }));
    console.log(res);
    alert("User Updated !!");
    navigate("/");
  };

  return (
    <div className="create-user-div">
      <form onSubmit={handleUpdate}>
        <h2>Update User</h2>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="number"
          placeholder="Enter Age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <button className="submit-btn">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
