import React from "react";

function CardTodo({ todos, onDeleteTodo }) {
  return (
    <>
      {todos.map((todo) => (
        <div className="TodoCard" key={todo._id}>
          <p>{todo.title}</p>
          <span>
            {/* Định dạng ngày giờ Việt Nam */}
            {new Date(todo.createdAt).toLocaleDateString("vi-VN", {
              hour: "2-digit",
              minute: "2-digit",
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </span>
          <br />
          <span>{todo.completed ? "Hoàn thành" : "Chưa xong"}</span>
          {/* nút sửa */}
          <button>Sửa</button>

          {/* nút xóa */}
          <button
            onClick={() => {
              onDeleteTodo(todo._id);
            }}
          >
            Xóa
          </button>
        </div>
      ))}
    </>
  );
}

export default CardTodo;
