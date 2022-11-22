import React from "react";
import { Card } from "@mui/material";
import "../../../src/styles/dashboard.css";

export interface DashboardCardProps {
    image_url: string,
    name: string,
    surname: string,
    floor: string
}

export const DashboardCard = (props: DashboardCardProps) => {
  const { image_url, name, surname, floor } = props;

  return (
    <Card variant="outlined" className="card-container">
      <img src={image_url} alt={name} className="card-img" />
      <div className="info-card">
        <h4>{name}</h4>
        <h4>{surname}</h4>
        <p>User Floor:{floor}</p>
      </div>
    </Card>
  );
};

export default DashboardCard;
