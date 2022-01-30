import axios from "axios";

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
  });

export const getPokemon = async (id) => {
  const { data } = await api.get(`/pokemon/${id}`);
  console.log(data)
  return data;
};
