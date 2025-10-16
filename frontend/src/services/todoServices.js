import { API_URL } from "./api";
import axios from "axios";

// Lấy tất cả todos, phân trang
// api/todos?currentPage=3&dataPerPage=5
export const getAllTodos = async (currentPage, dataPerPage) => {
  try {
    const res = await axios.get(
      `${API_URL}/todos?currentPage=${currentPage}&dataPerPage=${dataPerPage}`
    );
    console.log(res.data);
    // Trả dữ liệu lấy từ api
    return res.data;
  } catch (error) {
    console.log("Lỗi khi lấy todos", error);
  }
};

//
export const createTodo = async () => {};

//
