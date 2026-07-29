import api from "../api/axios";

const getAllTeams = async () => {
  const response = await api.get("/teams");
  return response.data;
};

const getTeamById = async (id) => {
  const response = await api.get(`/teams/${id}`);
  return response.data;
};

const createTeam = async (teamData) => {
  const response = await api.post("/teams", teamData);
  return response.data;
};

const updateTeam = async (id, teamData) => {
  const response = await api.put(`/teams/${id}`, teamData);
  return response.data;
};

const deleteTeam = async (id) => {
  const response = await api.delete(`/teams/${id}`);
  return response.data;
};

const joinTeam = async (teamId) => {
  const response = await api.post(`/teams/${teamId}/join`);
  return response.data;
};

const leaveTeam = async (teamId) => {
  const response = await api.post(`/teams/${teamId}/leave`);
  return response.data;
};

const teamApi = {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
  joinTeam,
  leaveTeam,
};

export default teamApi;