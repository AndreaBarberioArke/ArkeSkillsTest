import React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface FormValues {
  username: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const [{ username, password }] = useState({
    username: "Andrea",
    password: "Ciao1234",
  });

  const [firstData, setFirstData] = useState<string | any>("");
  const [secondData, setSecondData] = useState<string | any>("");
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<FormValues>();

  const onFormSubmit: any | SubmitHandler<FormValues> = (
    data: FormValues,
    event: React.FormEvent<HTMLFormElement>
  ) => {
    console.log("data", data);
    event.preventDefault();
    axios
      .post("https://run.mocky.io/v3/d93248bb-0dbf-4221-a913-8996ebdaeaa5")
      .then((res) => {
        setFirstData(res.data?.username);
        setSecondData(res.data?.password);
      });
    if (username === firstData && password === secondData) {
      navigate("/dashboard");
    } else {
      console.log("Username or Password are incorrect");
    }
  };
  return (
    <div
      className="container-card"
      style={{
        display: "flex",
        alignItems: "center",
        flexFlow: "column",
        justifyContent: "space-between",
      }}
    >
      <Card
        className="card-style"
        variant="outlined"
        style={{
          display: "flex",
          alignItems: "center",
          alignSelf: "center",
          flexFlow: "column",
          justifyContent: "space-between",
          margin: "150px",
          padding: "15px",
          width: "400px",
          height: "350px",
        }}
      >
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <CardContent
            style={{
              display: "flex",
              margin: "20px",
              flexFlow: "column wrap",
            }}
          >
            <TextField
              style={{
                display: "flex",
                margin: "20px",
              }}
              {...register("username", { required: true })}
              placeholder="Username"
              variant="outlined"
              type="text"
              required
            />

            <TextField
              style={{
                display: "flex",
                margin: "20px",
              }}
              type="password"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 16,
              })}
              placeholder="Password"
              variant="outlined"
            />

            <Button
              variant="outlined"
              type="submit"
              style={{
                display: "flex",
                margin: "20px",
              }}
            >
              Submit
            </Button>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;
