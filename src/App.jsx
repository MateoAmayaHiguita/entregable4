import axios from "axios";
import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import FormUser from "./components/FormUser";
import UserCard from "./components/UserCard";
// import { AiFillGithub } from "react-icons/fa";

function App() {
  const [users, setUsers] = useState();
  const [updateInfo, setUpdateInfo] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const getAllUsers = () => {
    const url = "https://users-crud.academlo.tech/users/";
    axios
      .get(url)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const createNewUser = (data) => {
    const url = "https://users-crud.academlo.tech/users/";
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const deleteUserById = (id) => {
    const url = `https://users-crud.academlo.tech/users/${id}/`;
    axios
      .delete(url)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };
  const updateUserById = (id, data) => {
    const url = `https://users-crud.academlo.tech/users/${id}/`;
    axios
      .put(url, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
        setUpdateInfo();
      })
      .catch((err) => console.log(err));
  };
  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);
  return (
    <div className="app">
      <section className=" app_header">
        <h1 className="app_title">Users</h1>
        <button onClick={handleOpen} className="app_btn-form">
          Open Fomr
        </button>
      </section>
      <hr className="app_hr" />
      <div className={`app_form ${isOpen && "app_form-visible"}`}>
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          handleClose={handleClose}
          setUpdateInfo={setUpdateInfo}
        />
      </div>
      <div className="app_card">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            handleOpen={handleOpen}
          />
        ))}
      </div>
      <hr />
      <footer className="footer_footer">
        <h4 className="footer_title">Create by Mateo with love</h4>
      </footer>
    </div>
  );
}

export default App;
