import { API_URL } from "./api";
import axios from "axios";

export const getAllTodos = async () => {
  try {
    const res = await axios.get(`${API_URL}/todos`);
    console.log(res.data.data);
    // Trả dữ liệu lấy từ api
    return res.data.data;
  } catch (error) {
    console.log("Lỗi khi lấy todos", error);
  }
};

//
export const createTodo = async () => {};
