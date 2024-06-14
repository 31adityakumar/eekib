import { useState, useEffect } from "react";
import axios from "axios";
import style from './Messages.module.scss'
const Messages = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://eelib.onrender.com/contact");
      console.log("Fetched users:", response.data); // Check fetched data
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      // Optionally, you can set an empty array or handle the error in a different way.
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log("Users:", users); // Check users state

  return (
    <div className={style.messages}>
      <h2>Here are your messages!</h2>
      <div className={style.list}>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.name}, {user.scholar}, {user.email}, {user.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Messages;
