import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import "./LoginPage.css";
const Item = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "15.625rem",
  },
}));

interface FormValues {
  username: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { username, password } = user;
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<FormValues>();

  const onFormSubmit: any | SubmitHandler<FormValues> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    axios
      .post("https://run.mocky.io/v3/d93248bb-0dbf-4221-a913-8996ebdaeaa5")
      .then((res) => {
        if (res.data.username === username && res.data.password === password) {
          navigate("/dashboard");
        } else {
          alert("Username or Password are incorrect");
        }
      });
  };

  return (
    <Card className="container-card">
      <Item className="card" variant="outlined">
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <CardContent className="card-content">
            <TextField
              className="text-field"
              {...register("username", { required: true })}
              onChange={(e) => {
                setUser((p) => ({
                  username: e.target.value,
                  password: p.password,
                }));
              }}
              placeholder="Username"
              variant="outlined"
              type="text"
            />

            <TextField
              className="text-field"
              type="password"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 16,
              })}
              onChange={(e) => {
                setUser((p) => ({
                  username: p.username,
                  password: e.target.value,
                }));
              }}
              placeholder="Password"
              variant="outlined"
            />

            <Button variant="outlined" type="submit" className="text-field">
              Submit
            </Button>
          </CardContent>
        </form>
      </Item>
    </Card>
  );
};

export default LoginForm;
