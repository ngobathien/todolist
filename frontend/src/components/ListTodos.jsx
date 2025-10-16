import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAllTodos } from "../services/todoServices";
import Pagination from "./Pagination";
//
function ListTodos() {
  const [todos, setTodos] = useState([]);
  // ban đầu loading vì dữ liệu đang tải xuống, cần thời gian, điều này giúp trải nghiệm tốt hơn
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const dataPerPage = 3;
  //
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await getAllTodos(currentPage, dataPerPage);
        // Lấy dữ liệu
        setTodos(todosData.data);
        setTotalPages(todosData.pagination.totalPages);
        // khi lấy được dữ liệu thì dừng loading, hiển thị dữ liệu
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };

    fetchTodos();
  }, [currentPage]);

  // Xử lý sự kiện
  const nextClick = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage === totalPages) {
      setCurrentPage(totalPages);
    }
  };

  const prevClick = () => {
    setCurrentPage(currentPage - 1);
    if (currentPage === 1) {
      setCurrentPage(1);
    }
  };

  // Giao diện
  return (
    <>
      {/* render UI */}
      {todos.map((todo) => (
        <div className="TodoCard" key={todo._id}>
          <p>{todo.title}</p>
          <span>{todo.dueDate}</span>
          <br />
          <span>{todo.completed ? "Hoàn thành" : "Chưa xong"}</span>
          <button>Sửa</button>
          <button>Xóa</button>
        </div>
      ))}

      {/* Phân trang */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={nextClick}
        onPrev={prevClick}
      />
    </>
  );
}

export default ListTodos;
