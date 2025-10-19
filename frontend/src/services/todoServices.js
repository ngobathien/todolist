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
    console.error("Lỗi khi lấy todos", error);
  }
};

// tạo todo mới
export const createTodo = async (todoData) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { title: todoData });

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Lỗi khi tạo todo", error);
  }
};

//
export const updatedTodo = async () => {
  try {
  } catch (error) {
    console.error("Lỗi khi lấy todos", error);
  }
};

//
export const deleteTodo = async (id) => {
  try {
    const res = axios.delete(`${API_URL}/todos/${id}`);
    return res;
  } catch (error) {
    console.error("Lỗi khi xóa todo", error);
  }
};
