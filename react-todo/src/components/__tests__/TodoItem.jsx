import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../TodoItem';

describe('TodoItem Component', () => {
  const mockToggle = jest.fn();
  const mockDelete = jest.fn();
  const todo = { id: 1, text: 'Test Todo', completed: false };

  beforeEach(() => {
    mockToggle.mockClear();
    mockDelete.mockClear();
  });

  test('renders todo text', () => {
    render(
      <TodoItem 
        todo={todo} 
        onToggle={mockToggle} 
        onDelete={mockDelete} 
      />
    );
    
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  test('calls onToggle when clicked', () => {
    render(
      <TodoItem 
        todo={todo} 
        onToggle={mockToggle} 
        onDelete={mockDelete} 
      />
    );
    
    fireEvent.click(screen.getByText('Test Todo'));
    expect(mockToggle).toHaveBeenCalledWith(1);
  });

  test('calls onDelete when delete button is clicked', () => {
    render(
      <TodoItem 
        todo={todo} 
        onToggle={mockToggle} 
        onDelete={mockDelete} 
      />
    );
    
    fireEvent.click(screen.getByText('Delete'));
    expect(mockDelete).toHaveBeenCalledWith(1);
  });

  test('shows completed style when todo is completed', () => {
    const completedTodo = { ...todo, completed: true };
    
    render(
      <TodoItem 
        todo={completedTodo} 
        onToggle={mockToggle} 
        onDelete={mockDelete} 
      />
    );
    
    expect(screen.getByText('Test Todo')).toHaveStyle('text-decoration: line-through');
  });
});