import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddTodoForm from '../AddTodoForm';

describe('AddTodoForm Component', () => {
  test('calls onAdd with input value when form is submitted', async () => {
    const mockOnAdd = jest.fn();
    const user = userEvent.setup();
    
    render(<AddTodoForm onAdd={mockOnAdd} />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    await user.type(input, 'Test Todo');
    await user.click(addButton);
    
    expect(mockOnAdd).toHaveBeenCalledWith('Test Todo');
  });

  test('clears input after adding todo', async () => {
    const mockOnAdd = jest.fn();
    const user = userEvent.setup();
    
    render(<AddTodoForm onAdd={mockOnAdd} />);
    
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    await user.type(input, 'Test Todo');
    await user.click(addButton);
    
    expect(input.value).toBe('');
  });

  test('does not call onAdd when input is empty', async () => {
    const mockOnAdd = jest.fn();
    const user = userEvent.setup();
    
    render(<AddTodoForm onAdd={mockOnAdd} />);
    
    const addButton = screen.getByTestId('add-button');
    
    await user.click(addButton);
    
    expect(mockOnAdd).not.toHaveBeenCalled();
  });
});