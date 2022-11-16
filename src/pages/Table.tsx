import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import "../../src/index.css"
import "../components/layout/NewUserForm.css";
import { useRef } from "react";
import Card from "../components/ui/Card"
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



function TablePage() {
  const [user, setUser] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/2fd5ebc9-7c38-4b2c-88e4-c3549446d195")
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  return (
    <div>
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>Gender</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.map((item, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {item.gender}
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>{item.city}</TableCell>
                  <TableCell>{item.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="userFormContainer">
        
        <NewUserForm
          onAddUsers={() => {
            console.log("hello");
          }}
        />
      </div>
    </div>
  );
}

export default TablePage;
