import React from "react";
import { Card } from "@mui/material";
import "../../../src/styles/dashboard.css";
import styled from "@emotion/styled";
import Paper from "@mui/material";

export const DashboardCard = ({ props }: any) => {
  const Element = styled(Paper)(({ theme }) => ({
    display: "flex",
    flexFlow: "row wrap",
    margin: "200px",
    padding: theme.spacing(3),
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {},
  }));
  return (
    <Card variant="outlined" className="card-container">
      <img src={props.image_url} alt={props.name} className="card-img" />
      <div className="info-card">
        <h4>{props.name}</h4>
        <h4>{props.surname}</h4>
        <p>User Floor:{props.floor}</p>
      </div>
    </Card>
  );
};

export default DashboardCard;
