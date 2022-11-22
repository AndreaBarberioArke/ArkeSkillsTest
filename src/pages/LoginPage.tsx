import React, {ChangeEvent} from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Alert, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "../styles/LoginPage.css";

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
  const [error, setError] = useState<string>('');
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
    axios
      .post("https://run.mocky.io/v3/d93248bb-0dbf-4221-a913-8996ebdaeaa5")
      .then((res) => {
        if (res.data.username === username && res.data.password === password) {
          navigate("/dashboard");
        } else {
          setError('Username or Password are incorrect')
        }
      });
  };

  function handleOnChange(type: string, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const value = e.target.value
    if(type === 'username') {
      setUser((p) => ({
        username: value,
        password: p.password,
      }));
    }
    if(type === 'password') {
      setUser((p) => ({
        username:p.username,
        password: value,
      }));
    }
  }

  return (
    <Card className="container">
      <Item className="card" variant="outlined">
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <CardContent className="card-content">
            <TextField
              className="text-field"
              {...register("username", { required: true })}
              onChange={(e) => handleOnChange('username', e)}
              label="Username"
              placeholder="Username"
              required
              variant="outlined"
              type="text"
              sx={{mb: 2}}
            />

            <TextField
              type="password"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 16,
              })}
              onChange={(e) => handleOnChange('password', e)}
              required
              placeholder="Password"
              label="Password"
              variant="outlined"
              sx={{mb: 2}}
            />
            {!!error && <Alert severity="error" sx={{mb:1}}>{error}</Alert>}

            <Button
                color="secondary"
                type="submit"
                className="text-field">
              Submit
            </Button>
          </CardContent>
        </form>
      </Item>
    </Card>
  );
};

export default LoginForm;
