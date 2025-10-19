import Pagination from "./Pagination";
import CardTodo from "./CardTodo";

// nhận từ HomePage.jsx
function ListTodos({
  todos,
  currentPage,
  totalPages,
  onNext,
  onPrev,
  onDeleteTodo,
}) {
  // Giao diện
  return (
    <>
      {/* Card todo: thẻ hiển thị dữ liệu cho mỗi todo */}

      <CardTodo todos={todos} onDeleteTodo={onDeleteTodo} />

      {/* Phân trang */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={onNext}
        onPrev={onPrev}
      />
    </>
  );
}

export default ListTodos;
