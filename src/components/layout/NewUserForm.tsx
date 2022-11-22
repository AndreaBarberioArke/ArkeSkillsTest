import React, { ChangeEventHandler } from "react";
import Card from "../ui/Card";
import "../../styles/NewUserForm.css";
import { useState } from "react";
interface Props {
  onAddUsers: any;
}

export const NewUserForm = (props: Props) => {
  const [userInfo, setUserInfo] = useState({
    gender: "",
    name: "",
    location: "",
    city: "",
    email: "",
  });

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    props.onAddUsers(userInfo);
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    setUserInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Card>
      <form action="" className="form" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="gender">New User gender</label>
          <input
            type="text"
            required
            name="gender"
            id="gender"
            value={userInfo.gender}
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <label htmlFor="name">New User name</label>
          <input
            type="text"
            required
            name="name"
            id="name"
            value={userInfo.name}
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <label htmlFor="location">New User Location</label>
          <input
            type="text"
            required
            name="location"
            id="location"
            value={userInfo.location}
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <label htmlFor="city">New User city</label>
          <input
            type="text"
            required
            name="city"
            id="city"
            value={userInfo.city}
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <label htmlFor="email">New User email</label>
          <input
            type="text"
            required
            name="email"
            id="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <div className="actions">
            <button onClick={submitHandler}>Add New User</button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default NewUserForm;
