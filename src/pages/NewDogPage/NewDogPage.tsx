import Header from "../../components/Header/Header";
import NewDog from "../../components/NewDog/NewDog";

const NewDogPage = (): JSX.Element => {
  return (
    <>
      <Header path="/dogs" title="Create New Dog" linkText="Back Dogs List" />
      <NewDog />
    </>
  );
};

export default NewDogPage;
