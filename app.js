async function addTodo() {
  const input = document.getElementById("todo-input");
  const todo = input.value;

  const res = await fetch("http://localhost:3000/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: todo }),
  });
}
