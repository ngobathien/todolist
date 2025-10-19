import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import ListTodos from "../components/ListTodos";
import CreateTodo from "../components/CreateTodo";
import { toast, ToastContainer } from "react-toastify";
import { createTodo, deleteTodo, getAllTodos } from "../services/todoServices";

function HomePage() {
  const [todos, setTodos] = useState([]);

  // ban đầu loading vì dữ liệu đang tải xuống, cần thời gian, điều này giúp trải nghiệm tốt hơn
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const dataPerPage = 3;

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
  // load dữ liệu
  useEffect(() => {
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
  // hàm xử lý thêm todo mới
  const handleCreateTodo = async (newTodo) => {
    try {
      // gọi hàm createTodo và truyền data vào
      // const todoData = await createTodo(newTodo);
      // setTodos([...todos, todoData]);

      await createTodo(newTodo);
      // Sau khi thêm xong → load lại dữ liệu trang hiện tại
      const todosData = await getAllTodos(currentPage, dataPerPage);
      setTodos(todosData.data);
      setTotalPages(todosData.pagination.totalPages);
    } catch (error) {
      console.error("Lỗi khi thêm todo mới", error);
    }
  };

  //
  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      // Sau khi thêm xong → load lại dữ liệu trang hiện tại
      const todosData = await getAllTodos(currentPage, dataPerPage);
      setTodos(todosData.data);
      setTotalPages(todosData.pagination.totalPages);
    } catch (error) {
      console.error("Lỗi khi thêm todo mới", error);
    }
  };
  return (
    <>
      {/* Tiêu đề */}
      <Title />

      {/* Ô nhập dữ liệu và nút thêm */}
      <CreateTodo onCreateTodo={handleCreateTodo} />

      {/* Hiển thị danh sách todos*/}
      <ListTodos
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={nextClick}
        onPrev={prevClick}
      />
    </>
  );
}
export default HomePage;
