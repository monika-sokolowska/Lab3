import { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";
import "font-awesome/css/font-awesome.min.css";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  role: string;
}

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    role: "",
  });

  const token = localStorage.getItem("auth_token");
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  // Pobieranie użytkowników z backendu
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/", axiosConfig)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Dodawanie użytkownika
  const handleAddUser = () => {
    if (!newUser.first_name || !newUser.last_name || !newUser.role) {
      alert("Wszystkie pola muszą być wypełnione!");
      return;
    }
    axios
      .post("http://localhost:8000/api/users/", newUser, axiosConfig)
      .then((response) => {
        setUsers([...users, response.data]);
        setNewUser({ first_name: "", last_name: "", role: "" });
      })
      .catch((error) => console.error("Error adding user:", error));
  };

  // Usuwanie użytkownika
  const handleDeleteUser = (id: number) => {
    axios
      .delete(`http://localhost:8000/api/users/${id}/`, axiosConfig)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div className="user-list-container">
      <h1>Lista użytkowników</h1>
      <ul className="users-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <div className="user-info">
              <span>
                {user.first_name} {user.last_name}
              </span>
              <span>Rola: {user.role}</span>
            </div>
            <button
              className="delete-btn"
              onClick={() => handleDeleteUser(user.id)}>
              <i className="fa fa-trash" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>

      <h2 className="add-user-title">Dodaj użytkownika</h2>
      <div className="add-user-form">
        <input
          type="text"
          placeholder="Imie"
          value={newUser.first_name}
          onChange={(e) =>
            setNewUser({ ...newUser, first_name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Nazwisko"
          value={newUser.last_name}
          onChange={(e) =>
            setNewUser({ ...newUser, last_name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Rola"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        />
        <button className="add-btn" onClick={handleAddUser}>
          Dodaj
        </button>
      </div>
    </div>
  );
};
