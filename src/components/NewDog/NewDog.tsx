import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useApi from "../../hooks/useApi";
import { DogCredentials } from "../../redux/types";

const NewDog = (): JSX.Element => {
  const { newDog } = useApi();

  const initialDogData: DogCredentials = {
    chip: "",
    name: "",
    picture: "",
  };
  const [dogData, setDogData] = useState(initialDogData);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDogData({
      ...dogData,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    newDog(dogData);
    setDogData(initialDogData);
  };

  const isFormValid =
    dogData.picture !== "" && dogData.chip !== "" && dogData.name !== "";

  return (
    <Form autoComplete="off" onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          id="name"
          placeholder="Dog name"
          value={dogData.name}
          onChange={handleOnChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Chip</Form.Label>
        <Form.Control
          type="text"
          id="chip"
          placeholder="Introduce chip"
          value={dogData.chip}
          onChange={handleOnChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Picture</Form.Label>
        <Form.Control
          type="text"
          id="picture"
          placeholder="Introduce picture"
          value={dogData.picture}
          onChange={handleOnChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isFormValid}>
        Create Dog
      </Button>
    </Form>
  );
};

export default NewDog;
