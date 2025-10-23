import mongoose from "mongoose";
import Todo from "../models/todo.js";

// api/todos?page=2&limit=1
export const getAllTodos = async (req, res) => {
  try {
    // Pagination
    // nhận dữ liệu từ client
    // page là số trang hiện tại muốn xem
    const currentPage = parseInt(req.query.currentPage) || 1;

    // limit là giới hạn của dữ liệu 1 lần trả về là bao item
    const dataPerPage = parseInt(req.query.dataPerPage) || 3;

    // Bỏ qua phần tử
    const skip = (currentPage - 1) * dataPerPage;

    // Lấy dữ liệu từ database
    const todos = await Todo.find()
      .skip(skip)
      .limit(dataPerPage)
      .sort({ createdAt: -1 }); // lấy dữ liệu mới lên đầu tiên

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
    res.status(200).json({
      success: true,
      message: "Lấy dữ liệu thành công",
      data: todos,
      pagination: pagination,
    });
  } catch (error) {
    console.log(error);

    res.status(404).json({
      message: "Không lấy được dữ liệu",
      error,
    });
  }
};

export const createTodo = async (req, res) => {
  try {
    // Nhận dữ liệu
    const { title, deadline } = req.body;

    // Kiểm tra trường bắt buộc cần nhập
    if (!title || !title.trim()) {
      return res.status(404).json({ succes: false, message: "Thiếu tên todo" });
    }

    //
    const newTodo = new Todo({
      title: title,
      deadline: deadline,

      // completed: completed, // true: công việc đã hoàn thành, false: công việc chưa hoàn thành
    });

    await newTodo.save();

    res.status(201).json({
      succes: true,
      message: "Thêm công việc mới thành công",
      data: newTodo,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      succes: false,
      message: "Không thêm được dữ liệu",
    });
  }
};

export const updateTodo = async (req, res) => {
  try {
    // nhận dữ liệu từ client
    // id của todo
    const { id } = req.params;
    const { title, deadline } = req.body;

    // nếu dữ liệu tồn tại thì sẽ thực hiện việc sửa
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      {
        title,
        deadline,
      },
      { new: true }
    );

    // kiểm tra todo có tồn tại không bằng id
    if (!updatedTodo) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy dữ liệu todo",
      });
    }
    // trả về phản hồi
    res.status(200).json({
      success: false,
      message: "Cập nhật todo thành công",
      data: updatedTodo,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      succes: false,
      message: "Không cập nhật được dữ liệu",
    });
  }
};

// xóa todo
export const deleteTodo = async (req, res) => {
  try {
    // lấy id todo cần xoá
    const { id } = req.params;
    // thực hiện xóa
    await Todo.findByIdAndDelete(id);

    res.status(201).json({
      succes: true,
      message: "Xóa todo thành công",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      succes: false,
      message: "Không xóa được dữ liệu",
    });
  }
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
