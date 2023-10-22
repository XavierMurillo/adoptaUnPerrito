import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Tags } from "./Tags";

export const MyCard = ({ dogImg, dogName, dogDesc, badgeText, badgeColor }) => {
  return (
    <Card
      style={{
        width: "18rem",
        marginLeft: "1rem",
        height: "25rem",
        marginBottom: "2rem",
      }}
    >
      <Card.Img className="cardImg" variant="top" src={dogImg} />
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{dogName}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>{dogDesc}</Card.Text>
      </Card.Body>
      <Tags badgeText={badgeText} badgeColor={badgeColor} />
    </Card>
  );
};
