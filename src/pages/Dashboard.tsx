import React, {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import DashboardCard, {DashboardCardProps} from "../components/layout/DashboardCard";
import axios from "axios";
import "../../src/styles/dashboard.css";
import {Typography} from "@mui/material";

const Element = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexFlow: "row wrap",
  margin: "200px",
  padding: theme.spacing(3),
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    margin: "0px 5px 0px 0px",
  },
}));

export const Dashboard = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
      getData()
  },[])

    function getData(){
        axios
            .get("https://run.mocky.io/v3/7b764d09-c540-4408-831b-ec24c14e9121")
            .then((response) => {
                setUser(response.data.users.info);
            });
    }
  return (
    <div>
      <div className="box-container">
        <Box
          className="box"
          sx={{
            flexGrow: 2,
            display: "grid",
          }}
        >
          <Element>
            <Grid
              className="grid"
              container
              spacing={4}
            >
              {user.length > 0 && user.map((item: DashboardCardProps, index) => (
                <Grid key={index} item xs={12} md={4} lg={2}>
                    <DashboardCard
                        image_url={item.image_url}
                        name={item.name}
                        surname={item.surname}
                        floor={item.floor}/>
                </Grid>
              ))}

            </Grid>
          </Element>
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
