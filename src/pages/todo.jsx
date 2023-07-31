import Content from "../components/tasksList.tsx";

export function TodoList() {
  return (
    <div>
      <div className="container d-flex justify-content-center py-3">
        <h1>Todo List</h1>
      </div>
      <div className="d-flex justify-content-center">
        <Content />
      </div>
    </div>
  );
}
