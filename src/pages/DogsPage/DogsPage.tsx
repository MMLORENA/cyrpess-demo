import { useEffect } from "react";
import DogCard from "../../components/DogCard/DogCard";
import Header from "../../components/Header/Header";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../redux/hooks";
import "./DogsPage.css";

const DogsPage = (): JSX.Element => {
  const { getDogs } = useApi();
  const { dogs } = useAppSelector((state) => state);

  useEffect(() => {
    getDogs();
  }, [getDogs]);

  return (
    <>
      <Header linkText="New Dog" title="Dogs List" path="/create" />
      <main className="dog-card container">
        {dogs.map(({ chip, id, name, picture }) => (
          <DogCard key={id} chip={chip} name={name} picture={picture} />
        ))}
      </main>
    </>
  );
};

export default DogsPage;
