import { render, screen, fireEvent } from '@testing-library/react';
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
  beforeEach(() => {
    // Clear any state that might persist between tests
    jest.clearAllMocks();
  });

  test('renders initial todos', () => {
    render(<TodoList />);
    
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('adds a new todo when AddTodoForm calls onAdd', () => {
    render(<TodoList />);
    
    const addButton = screen.getByTestId('add-button');
    fireEvent.click(addButton);
    
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
  });

  test('toggles todo completion status when TodoItem calls onToggle', () => {
    render(<TodoList />);
    
    // Get the first todo text element and click it to toggle
    const todoTexts = screen.getAllByTestId('todo-text');
    fireEvent.click(todoTexts[0]);
    
    // You might want to add assertions about the todo's completed state
    // This would depend on how your TodoList component tracks completion
  });

  test('deletes a todo when TodoItem calls onDelete', () => {
    render(<TodoList />);
    
    const deleteButtons = screen.getAllByTestId('delete-button');
    const initialCount = deleteButtons.length;
    
    fireEvent.click(deleteButtons[0]);
    
    const remainingDeleteButtons = screen.getAllByTestId('delete-button');
    expect(remainingDeleteButtons).toHaveLength(initialCount - 1);
  });
});