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
// truyền vào dữ liệu mới
export const createTodo = async (todoData) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, todoData); // { title: todoData }

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Lỗi khi tạo todo", error);
  }
};

// cập nhật todo
// truyền vào id của todo đó
// truyền dữ liệu todo cần cập nhật
export const updatedTodo = async (id, todoData) => {
  try {
    const res = await axios.put(`${API_URL}/todos/${id}`, todoData);
    return res.data;
  } catch (error) {
    console.error("Lỗi khi lấy todos", error);
  }
};

// xóa todo
// truyền vào id của todo cần xóa, nhờ có id mà xác định được data nào cần xóa
export const deleteTodo = async (id) => {
  try {
    const res = axios.delete(`${API_URL}/todos/${id}`);
    return res;
  } catch (error) {
    console.error("Lỗi khi xóa todo", error);
  }
};
