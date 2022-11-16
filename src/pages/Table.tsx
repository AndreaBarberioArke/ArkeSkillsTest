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
import "../../src/index.css";
import "../components/layout/NewUserForm.css";
import NewUserForm from "../components/layout/NewUserForm";

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
          onAddUsers={(userInfo: any) => {
            setUser((prevState) => [...user, userInfo]);
          }}
        />
      </div>
    </div>
  );
}

export default TablePage;
