import React from "react"; 
import "./Card.css";
interface cardProps {
  children: React.ReactNode;
}
export const Card = (props: cardProps) => {
  return <div className="card">{props.children}</div>;
};

export default Card;
