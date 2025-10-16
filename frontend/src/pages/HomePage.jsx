import React from "react";
import Title from "../components/Title";
import ListTodos from "../components/ListTodos";
import CreateTodo from "../components/CreateTodo";

function HomePage() {
  return (
    <>
      {/* Tiêu đề */}
      <Title />

      {/* Ô nhập dữ liệu và nút thêm */}
      <CreateTodo />

      {/* Hiển thị danh sách todos*/}
      <ListTodos />
    </>
  );
}
export default HomePage;
