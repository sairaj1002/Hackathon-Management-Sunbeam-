import api from "../api/axios";

const getAllSubmissions = async () => {
  const response = await api.get("/submissions");
  return response.data;
};

const getSubmissionById = async (id) => {
  const response = await api.get(`/submissions/${id}`);
  return response.data;
};

const createSubmission = async (submissionData) => {
  const response = await api.post("/submissions", submissionData);
  return response.data;
};

const updateSubmission = async (id, submissionData) => {
  const response = await api.put(`/submissions/${id}`, submissionData);
  return response.data;
};

const deleteSubmission = async (id) => {
  const response = await api.delete(`/submissions/${id}`);
  return response.data;
};

const submissionApi = {
  getAllSubmissions,
  getSubmissionById,
  createSubmission,
  updateSubmission,
  deleteSubmission,
};

export default submissionApi;