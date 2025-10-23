import Pagination from "./Pagination";
import CardTodo from "./CardTodo";

function ListTodos({
  todos,
  currentPage,
  totalPages,
  onNext,
  onPrev,
  onDeleteTodo,
  onUpdateTodo,
}) {
  return (
    <div className="max-w-5xl mx-auto">
      {/*  */}
      <CardTodo
        todos={todos}
        // xóa
        onDeleteTodo={onDeleteTodo}
        // cập nhật
        onUpdateTodo={onUpdateTodo}
      />

      {/*  */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={onNext}
        onPrev={onPrev}
      />
    </div>
  );
}

export default ListTodos;
