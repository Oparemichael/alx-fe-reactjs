import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  test('calls onToggle when text is clicked', async () => {
    const user = userEvent.setup();
    
    render(
      <TodoItem 
        todo={todo} 
        onToggle={mockToggle} 
        onDelete={mockDelete} 
      />
    );
    
    const todoText = screen.getByTestId('todo-text');
    await user.click(todoText);
    
    expect(mockToggle).toHaveBeenCalledWith(1);
  });

  test('calls onDelete when delete button is clicked', async () => {
    const user = userEvent.setup();
    
    render(
      <TodoItem 
        todo={todo} 
        onToggle={mockToggle} 
        onDelete={mockDelete} 
      />
    );
    
    const deleteButton = screen.getByTestId('delete-button');
    await user.click(deleteButton);
    
    expect(mockDelete).toHaveBeenCalledWith(1);
  });

  test('applies completed style when todo is completed', () => {
    const completedTodo = { ...todo, completed: true };
    
    render(
      <TodoItem 
        todo={completedTodo} 
        onToggle={mockToggle} 
        onDelete={mockDelete} 
      />
    );
    
    const todoText = screen.getByTestId('todo-text');
    expect(todoText).toHaveStyle('text-decoration: line-through');
  });
});