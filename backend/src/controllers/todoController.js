import mongoose from "mongoose";
import Todo from "../models/todo.js";

// api/todos?ppage=2&limit=1
export const getAllTodos = async (req, res) => {
  try {
    // Lấy dữ liệu từ database
    const todos = await Todo.find();

    // Pagination
    // page là số trang muốn xem
    const page = parseInt(req.query.page) || 1;

    // limit là số trang giới hạn của dữ liệu
    const limit = parseInt(req.query.limit) || 1;

    // Gửi phản hồi
    // res.json(todos);
    res.json({ success: true, message: "Lấy dữ liệu thành công", data: todos });
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
