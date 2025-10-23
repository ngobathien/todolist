import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

// Nhận props từ HomePage.jsx
function CreateTodo({ onCreateTodo }) {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState();

  // dữ liệu mới
  const newTodo = { title, deadline };

  // hàm xử lý thêm todo mới
  const handleSubmit = async () => {
    // kiểm tra input
    if (!title || !title.trim()) {
      // trim() chặn trường hợp người dùng nhập toàn dấu cách " "
      toast.warning("Vui lòng nhập công việc mới");
      return; // dừng, ko chạy tiếp nếu điều kiện là đúng
    }

    try {
      // gọi onCreateTodo được truyền props xuống và truyền data vào
      onCreateTodo(newTodo);
      setTitle("");
      toast.success("Thêm todo thành công");
    } catch (error) {
      console.error("Lỗi khi thêm todo mới", error);
      toast.error("Lỗi khi thêm todo mới");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg">
        {/* Ô nhập tên công việc */}
        <label className="block mb-4">
          <span className="text-gray-700 font-semibold mb-2 block">
            Tên công việc
          </span>
          <input
            type="text"
            placeholder="Nhập tên công việc..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
          />
        </label>

        {/* Deadline */}
        <label className="block mb-4">
          <span className="text-gray-700 font-semibold mb-2 block">
            Hạn hoàn thành
          </span>
          <input
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
          />
        </label>

        {/* Nút thêm */}
        <button
          onClick={handleSubmit}
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
        >
          ➕ Thêm công việc
        </button>
      </div>

      {/* Hiển thị thông báo */}
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default CreateTodo;
