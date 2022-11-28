import Card from "react-bootstrap/Card";
import "./DogCard.css";

interface DogCardProps {
  name: string;
  chip: string;
  picture: string;
}
const DogCard = ({ chip, name, picture }: DogCardProps) => {
  return (
    <Card className="dog col-3">
      <div className="image-container">
        <Card.Img variant="top" src={picture} className="dog__image" />
      </div>
      <Card.Body className="dog__body">
        <Card.Title>{name}</Card.Title>
        <Card.Text> Chip: {chip}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DogCard;
