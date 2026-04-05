import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/complaints",
});

export const getComplaints = () => API.get("/");
export const createComplaint = (data) => API.post("/", data);
export const updateComplaint = (id, data) => API.put(`/${id}`, data);
export const deleteComplaint = (id) => API.delete(`/${id}`);