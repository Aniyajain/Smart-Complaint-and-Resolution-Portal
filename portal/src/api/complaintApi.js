import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/complaints",
});


export const getComplaints = (email) =>
  API.get(`/?email=${email}`);
export const createComplaint = async (data) => {
  try {
    const res = await API.post("/", data);
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message;
  }
};
export const updateComplaint = (id, data) => API.put(`/${id}`, data);
export const deleteComplaint = (id) => API.delete(`/${id}`);