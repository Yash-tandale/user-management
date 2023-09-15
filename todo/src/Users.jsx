import axios from "axios";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "./redux/userSlice";
import { BASE_URL } from "../helper/helper.jsx";

const Users = () => {
  const users = useSelector((state) => state.userReducer.users);
  console.log(users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/users/delete-user/${id}`);
      dispatch(deleteUser({ id }));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="user-container">
      <div className="table-container">
        <button className="add-btn" onClick={() => navigate("/create-user")}>
          Add+
        </button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <button
                      className="update-btn"
                      onClick={() => navigate(`/update-user/${user.id}`)}
                    >
                      Update
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
