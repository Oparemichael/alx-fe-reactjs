const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`} data-testid="todo-item">
      <span 
        onClick={() => onToggle(todo.id)}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        data-testid="todo-text"
      >
        {todo.text}
      </span>
      <button 
        onClick={() => onDelete(todo.id)}
        data-testid="delete-button"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;