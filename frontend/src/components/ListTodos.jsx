import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAllTodos } from "../services/todoServices";
//
function ListTodos() {
  const [todos, setTodos] = useState([]);
  // ban đầu loading vì dữ liệu đang tải xuống, cần thời gian, điều này giúp trải nghiệm tốt hơn
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await getAllTodos();
        // Lấy dữ liệu
        setTodos(todosData);
        // khi lấy được dữ liệu thì dừng loading, hiển thị dữ liệu
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };

    fetchTodos();
  }, []);

  return (
    <>
      {/* render UI */}
      {todos.map((todo) => (
        <div className="TodoCard" key={todo._id}>
          <p>{todo.title}</p>
          <span>{todo.dueDate}</span>
          <br />
          <span>{todo.completed ? "Hoàn thành" : "Chưa xong"}</span>
        </div>
      ))}
    </>
  );
}

export default ListTodos;
