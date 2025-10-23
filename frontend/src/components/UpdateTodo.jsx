import React, { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

// Nhận props từ .jsx
function UpdateTodo({ todo, showModal, onUpdateTodo, onCloseModal }) {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState();

  // const [isCloseModal, setIsCloseModal] = useState(true);
  // dữ liệu mới
  // const updateTodo = { ...todo, title: title, deadline: deadline };

  // Khi prop todo thay đổi, load dữ liệu lên input
  useEffect(() => {
    if (todo) {
      console.log(todo);
      setTitle(todo.title || "");

      /*
      new Date(todo.deadline) → tạo đối tượng Date từ chuỗi ISO hoặc timestamp.
      .toISOString() → trả về "2025-10-25T04:06:00.000Z".
      .slice(0, 16) → cắt còn "2025-10-25T04:06" để hợp lệ với datetime-local. 
      */
      if (todo.deadline) {
        const date = new Date(todo.deadline);
        const localISOTime = date.toISOString().slice(0, 16);
        setDeadline(localISOTime);
      } else {
        setDeadline("");
      }
    }
  }, [todo]);

  // hàm xử lý sửa todo
  const handleSubmit = async () => {
    // kiểm tra input
    if (!title || !title.trim()) {
      // trim() chặn trường hợp người dùng nhập toàn dấu cách " "
      toast.warning("Vui lòng nhập công việc mới");
      return; // dừng, ko chạy tiếp nếu điều kiện là đúng
    }

    try {
      const updateTodo = { ...todo, title, deadline };
      // gọi onCreateTodo được truyền props xuống và truyền data vào
      onUpdateTodo(todo._id, updateTodo);
      setTitle("");
      toast.success("Sửa todo thành công");
    } catch (error) {
      console.error("Lỗi khi sửa todo", error);
      toast.error("Lỗi khi sửa todo mới");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  // nếu chưa nhận được sự kiện sẽ ẩn đi
  if (!showModal) {
    return null;
  }

  return (
    <>
      {/* fixed inset-0: phủ kín toàn màn hình.

bg-black bg-opacity-50: tạo nền mờ (đen 50%).

flex items-center justify-center: căn giữa form.

z-50: đảm bảo modal nằm trên tất cả các phần khác.

max-w-md: form có chiều rộng cố định (~400–500px). */}
      {/* fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 */}
      <div className="fixed  inset-0 bg-opacity-50 flex items-center justify-center z-50 ">
        {/* thẻ chứa nội dung */}
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg ">
          {/* Ô nhập tên công việc */}
          <label className="block mb-4">
            <span className="text-gray-700 font-semibold mb-2 block">
              Tên công việc
            </span>
            <input
              type="text"
              placeholder="Nhập tên công việc..."
              value={title || ""}
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
              value={deadline || ""}
              onChange={(e) => setDeadline(e.target.value)}
              className="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
            />
          </label>

          {/* 2 nút */}
          <div className=" flex flex-row">
            {/* Nút thêm */}
            <button
              onClick={handleSubmit}
              className="basis-64 w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
            >
              Sửa công việc
            </button>
            <button
              // gọi sự kiện đóng
              onClick={onCloseModal}
              className=" basis-64 w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
      {/* Hiển thị thông báo */}
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default UpdateTodo;
