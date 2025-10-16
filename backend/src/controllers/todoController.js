import mongoose from "mongoose";
import Todo from "../models/todo.js";

// api/todos?page=2&limit=1
export const getAllTodos = async (req, res) => {
  try {
    // Pagination
    // page là số trang hiện tại muốn xem
    const currentPage = parseInt(req.query.currentPage) || 1;

    // limit là giới hạn của dữ liệu 1 lần trả về là bao item
    const dataPerPage = parseInt(req.query.dataPerPage) || 3;

    // Bỏ qua phần tử
    const skip = (currentPage - 1) * dataPerPage;

    // Lấy dữ liệu từ database
    const todos = await Todo.find().skip(skip).limit(dataPerPage);

    // Đếm tổng số lượng dữ liệu trong database
    const totalData = await Todo.countDocuments();
    console.log(totalData);

    // Tổng số trang dữ liệu
    const totalPages = Math.ceil(totalData / dataPerPage);

    //
    const pagination = {
      totalPages: totalPages,
      totalData: totalData,
      skip: skip,
      currentPage: currentPage,
      dataPerPage: dataPerPage,
    };

    // Res dữ liệu dạng json
    res.json({
      success: true,
      message: "Lấy dữ liệu thành công",
      data: todos,
      pagination: pagination,
    });
  } catch (error) {
    console.log(error);

    res.json({
      message: "Không lấy được dữ liệu",
    });
  }
};

export const createTodo = async (req, res) => {
  try {
    // Nhận dữ liệu
    const { title, dueDate, completed } = req.body;

    //
    if (!title) {
      res.json({ message: "Thiếu tên công việc" });
    }

    // }

    //
    const newTodo = new Todo({
      title: title,
      dueDate: dueDate,
      completed: completed, // true: công việc đã hoàn thành, false: công việc chưa hoàn thành
    });

    await newTodo.save();

    res.json({
      succes: true,
      message: "Thêm công việc thành công",
      data: newTodo,
    });
  } catch (error) {
    console.log(error);
    res.json({
      succes: false,
      message: "Không thêm được dữ liệu",
    });
  }
};

export const updateTodo = async (req, res) => {
  try {
  } catch (error) {}
};

export const deletTodo = async (req, res) => {
  try {
  } catch (error) {}
};

export const search = async (req, res) => {
  // res.send("Tìm kiếm");
  try {
    const title = req.query.title;
    console.log(title);
    // const data = { text: text, number: number };
    res.json({ data: title });
  } catch (error) {}
};
