import axios from "axios";
import { useCallback } from "react";
import { loadDogsActionCreator } from "../redux/dogs/dogsSlice";
import { useAppDispatch } from "../redux/hooks";
import { DataDogs, DogCredentials } from "../redux/types";

const useApi = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();

  const getDogs = useCallback(async () => {
    const {
      data: { dogs },
    } = await axios.get<DataDogs>(`${apiUrl}dogs`);

    dispatch(loadDogsActionCreator(dogs));
  }, [apiUrl, dispatch]);

  const newDog = async (dogData: DogCredentials) => {
    await axios.post(`${apiUrl}dogs/create`, dogData);
  };

  return { getDogs, newDog };
};

export default useApi;
