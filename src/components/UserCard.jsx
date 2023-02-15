import React from "react";

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpen }) => {
  const handleDelete = () => {
    deleteUserById(user.id);
  };

  const handleUpdate = () => {
    setUpdateInfo(user);
    handleOpen();
  };
  return (
    <article className="user_container">
      <h2 className="user_card-title">{`${user.first_name} ${user.last_name}`}</h2>
      <ul>
        <li>
          <span className="user_card-label">Email : {user.email} </span>
        </li>
        <li>
          <span className="user_card-label">Birthday : {user.birthday} </span>
        </li>
        <hr />
      </ul>
      <div className="user_btn-container">
        <button className="user_btn" onClick={handleDelete}>
          Delete
        </button>
        <button className="user_btn" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </article>
  );
};

export default UserCard;
