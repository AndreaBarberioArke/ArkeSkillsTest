import React from "react";
import Card from "../ui/Card";
import "./NewUserForm.css";
import { useRef } from "react";
interface Props {
  onAddUsers: any;
}
export const NewUserForm = (props: Props) => {
  const genderInputRef = useRef<any | undefined>();
  const nameInputRef = useRef<any | undefined>();
  const locationInputRef = useRef<any | undefined>();
  const cityInputRef = useRef<any | undefined>();
  const emailInputRef = useRef<any | undefined>();

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredGender = genderInputRef.current?.value;
    const enteredName = nameInputRef.current?.value;
    const enteredLocation = locationInputRef.current?.value;
    const enteredCity = cityInputRef.current?.value;
    const enteredEmail = emailInputRef.current?.value;

    const userData = {
      gender: enteredGender,
      name: enteredName,
      location: enteredLocation,
      city: enteredCity,
      email: enteredEmail,
    };
    props.onAddUsers(userData);
  }
  return (
    <Card>
      <form action="" className="form" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="title">New User gender</label>
          <input type="text" required id="gender" ref={genderInputRef} />
        </div>
        <div className="control">
          <label htmlFor="image">New User name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className="control">
          <label htmlFor="address">New User Location</label>
          <input type="text" required id="location" ref={locationInputRef} />
        </div>
        <div className="control">
          <label htmlFor="city">New User city</label>
          <input type="text" required id="city" ref={cityInputRef} />
        </div>
        <div className="control">
          <label htmlFor="email">New User email</label>
          <input type="text" required id="email" ref={emailInputRef} />
        </div>
        <div className="control">
          <div className="actions">
            <button>Add New User</button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default NewUserForm;
