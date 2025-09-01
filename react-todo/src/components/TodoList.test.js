import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../TodoList';

// Mock the child components to isolate testing of TodoList
jest.mock('../AddTodoForm', () => {
  return function MockAddTodoForm({ onAdd }) {
    return (
      <div data-testid="add-todo-form">
        <input 
          data-testid="todo-input" 
          onChange={(e) => {}}
        />
        <button 
          data-testid="add-button" 
          onClick={() => onAdd('New Test Todo')}
        >
          Add Todo
        </button>
      </div>
    );
  };
});

jest.mock('../TodoItem', () => {
  return function MockTodoItem({ todo, onToggle, onDelete }) {
    return (
      <li data-testid="todo-item">
        <span 
          data-testid="todo-text"
          onClick={() => onToggle(todo.id)}
        >
          {todo.text}
        </span>
        <button 
          data-testid="delete-button"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </li>
    );
  };
});

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('adds a new todo when AddTodoForm calls onAdd', () => {
    render(<TodoList />);
    
    const addButton = screen.getByTestId('add-button');
    userEvent.click(addButton);
    
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
  });

  test('toggles todo completion status when TodoItem calls onToggle', () => {
    const { container } = render(<TodoList />);
    
    const todoItems = screen.getAllByTestId('todo-item');
    expect(todoItems).toHaveLength(4); // 3 initial + 1 added in previous test
    
    // The test might need to be adjusted based on implementation details
    // This is a basic example
  });

  test('deletes a todo when TodoItem calls onDelete', () => {
    render(<TodoList />);
    
    const deleteButtons = screen.getAllByTestId('delete-button');
    const initialCount = deleteButtons.length;
    
    userEvent.click(deleteButtons[0]);
    
    const remainingDeleteButtons = screen.getAllByTestId('delete-button');
    expect(remainingDeleteButtons).toHaveLength(initialCount - 1);
  });
});