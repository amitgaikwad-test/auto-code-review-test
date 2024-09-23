import React from "react";
import { Button, Input, List, Modal } from "antd";

const TodoApp = () => {
  const [todos, setTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState("");
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [selectedTodo, setSelectedTodo] = React.useState(null);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const showModal = (todo) => {
    setSelectedTodo(todo);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo List</h1>
      <Input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onPressEnter={addTodo}
        placeholder="Add a new todo"
        style={{ width: "300px", marginRight: "10px" }}
      />
      <Button onClick={addTodo} type="primary">
        Add
      </Button>
      <List
        style={{ marginTop: "20px" }}
        bordered
        dataSource={todos}
        renderItem={(item) => (
          <List.Item
            actions={[
              <a onClick={() => toggleComplete(item.id)}>
                {item.completed ? "Mark Incomplete" : "Mark Complete"}
              </a>,
              <a onClick={() => deleteTodo(item.id)}>Delete</a>,
              <a onClick={() => showModal(item)}>View</a>,
            ]}
          >
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.text}
            </span>
          </List.Item>
        )}
      />
      <Modal
        title="Todo Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectedTodo && (
          <div>
            <p>Text: {selectedTodo.text}</p>
            <p>Status: {selectedTodo.completed ? "Completed" : "Incomplete"}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default TodoApp;
