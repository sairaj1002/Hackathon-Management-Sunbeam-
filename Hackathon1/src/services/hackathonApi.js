import api from "../api/axios";

const getAllHackathons = async () => {
  const response = await api.get("/hackathons");
  return response.data;
};

const getHackathonById = async (id) => {
  const response = await api.get(`/hackathons/${id}`);
  return response.data;
};

const createHackathon = async (hackathonData) => {
  const response = await api.post("/hackathons", hackathonData);
  return response.data;
};

const updateHackathon = async (id, hackathonData) => {
  const response = await api.put(`/hackathons/${id}`, hackathonData);
  return response.data;
};

const deleteHackathon = async (id) => {
  const response = await api.delete(`/hackathons/${id}`);
  return response.data;
};

const hackathonApi = {
  getAllHackathons,
  getHackathonById,
  createHackathon,
  updateHackathon,
  deleteHackathon,
};

export default hackathonApi;