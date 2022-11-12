import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
interface FormData {
  username: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onFormSubmit = (data: FormData) => {
    console.log("data", data);
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
          width: "350px",
          height: "250px",
        }}
      >
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <CardContent className="">
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
            <div>{errors.password?.type === "minLength" && <span style={{display:"flex", alignSelf:"start", width:"100%", color: "red"}}>Your password must be almost 8 characters!</span>}</div>
            <div>{errors.password?.type === "maxLength" && <span style={{color: "red"}}>Your password might be shorter than 16!</span>}</div>

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
