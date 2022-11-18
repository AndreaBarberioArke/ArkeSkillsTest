import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import DashboardCard from "../components/layout/DashboardCard";
import axios from "axios";
import "../../src/styles/dashboard.css";

export const Dashboard = () => {
  const Element = styled(Paper)(({ theme }) => ({
    display: "flex",
    flexFlow: "row wrap",
    margin: "200px",
    padding: theme.spacing(3),
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      

    },
  }));

  const [user, setUser] = useState([]);

  axios
    .get("https://run.mocky.io/v3/7b764d09-c540-4408-831b-ec24c14e9121")
    .then((response) => {
      setUser(response.data.users.info);
    });

  return (
    <div>
      <div>
        <Box>
          <Grid item xs={6}>
            <Element>
              {user &&
                user.map((item, index) => (
                  <DashboardCard key={index} props={item} />
                ))}
            </Element>
          </Grid>
        </Box>
      </div>
      <div className="container-Dashcard"></div>
    </div>
  );
};

export default Dashboard;
