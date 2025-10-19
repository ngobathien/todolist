import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

// Nhận props từ HomePage.jsx
function CreateTodo({ onCreateTodo }) {
  const [todo, setTodo] = useState("");

  // hàm xử lý thêm todo mới
  const handleSubmit = async () => {
    // kiểm tra input
    if (!todo || !todo.trim()) {
      // trim() chặn trường hợp người dùng nhập toàn dấu cách " "
      toast.warning("Vui lòng nhập công việc mới");
      return; // dừng, ko chạy tiếp nếu điều kiện là đúng
    }

    try {
      // gọi onCreateTodo được truyền props xuống và truyền data vào
      onCreateTodo(todo);
      setTodo("");
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
      {/* ô nhập dữ liệu */}
      <label>
        <input
          type="text"
          value={todo}
          onKeyDown={handleKeyDown}
          onChange={(e) => setTodo(e.target.value)}
        />
      </label>
      {/* nút bấm thêm */}
      <button onClick={handleSubmit}>Thêm</button>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default CreateTodo;
