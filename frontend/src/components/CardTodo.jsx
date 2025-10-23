import React from "react";
import { useState } from "react";
import UpdateTodo from "./UpdateTodo";

function CardTodo({ todos, onDeleteTodo, onUpdateTodo }) {
  // set state show modal ban đầu là false: ẩn
  const [isOpenModal, setIsOpenModal] = useState(false);

  // set hiển thị đúng dữ liệu todo khi được nhấn nút sửa, để chỉnh sửa đúng todo đó
  const [selectedTodo, setSelectedTodo] = useState(null);
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
        {todos.map((todo) => (
          <div
            key={todo._id}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition duration-200"
          >
            <h3 className="text-lg font-semibold text-sky-600 mb-2">
              {todo.title}
            </h3>

            <p className="text-sm text-gray-600 mb-1">
              <strong>Ngày hoàn thành:</strong>{" "}
              {new Date(todo.deadline).toLocaleString("vi-VN", {
                hour: "2-digit",
                minute: "2-digit",
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>

            <p className="text-sm text-gray-600 mb-2">
              <strong>Ngày chỉnh sửa:</strong>{" "}
              {new Date(todo.updatedAt).toLocaleString("vi-VN", {
                hour: "2-digit",
                minute: "2-digit",
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>

            <p
              className={`text-sm font-medium mb-3 ${
                todo.completed ? "text-green-600" : "text-red-500"
              }`}
            >
              {todo.completed ? "✅ Hoàn thành" : "⏳ Chưa xong"}
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  // nhận đúng todo đang được chọn sửa
                  setSelectedTodo(todo);
                  // nhận sự kiện show modal khi được nhấn vào và hiển thị modal form
                  setIsOpenModal(true);
                }}
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-1 rounded transition"
              >
                Sửa
              </button>
              <button
                onClick={() => onDeleteTodo(todo._id)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-1 rounded transition"
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
      {/*  */}
      <UpdateTodo
        todo={selectedTodo}
        onUpdateTodo={onUpdateTodo}
        showModal={isOpenModal}
        // truyền props state close modal xuống
        onCloseModal={() => {
          setIsOpenModal(false);
        }}
      />
    </>
  );
}

export default CardTodo;
