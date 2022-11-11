import React, { ReactPropTypes, useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
interface Props {
  onAddUser: any;
}
const LoginForm = (props: Props) => {
  const [type, setType] = useState("password");
  const usernameInputRef = useRef<any | undefined>();
  const passwordInputRef = useRef<any | undefined>();

  const [username, password] = useState({
    username: "",
    password: "",
  });

  //   useEffect(() => {
  //     axios
  //       .get("https://run.mocky.io/v3/80bc9bb2-59be-4af9-a744-eb9590e0093f")
  //       .then((response) => {
  //         setUsername(response.data.login.username);
  //         setPassword(response.data.login.password);
  //       });
  //   }, []);
  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;

    const compiledForm = {
      username: enteredUsername,
      password: enteredPassword,
    };
    props.onAddUser(compiledForm);
  }
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
        <form onSubmit={submitHandler}>
          <CardContent className="">
            <TextField
              style={{
                display: "flex",
                margin: "20px",
              }}
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
              placeholder="Password"
              variant="outlined"
              type={type}
              required
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
