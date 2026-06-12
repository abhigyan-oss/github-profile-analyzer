import axios from "axios";

const API = axios.create({
  baseURL: "https://api.github.com",
});

export const getUser = async (username) => {
  const response = await API.get(`/users/${username}`);
  return response.data;
};

export const getRepos = async (username) => {
  const response = await API.get(`/users/${username}/repos`);
  return response.data;
};