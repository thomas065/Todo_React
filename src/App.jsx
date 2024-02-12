import { useState, useEffect } from 'react';
import './styles.css';
import { NewTodoForm } from './components/NewTodoForm';
import { TodoList } from './components/TodoList';

export default function App() {
    const [todos, setTodos] = useState(() => {
      const localValue = localStorage.getItem("ITEMS")
      if (localValue == null) return []

      return JSON.parse(localValue)
    }); // using an array because I'll have a list of todos / passing in useEffect function

    useEffect(() => {
      localStorage.setItem("ITEMS", JSON.stringify(todos))
    }, [todos])

    function addTodo(title) {
        setTodos(currentTodos => {
            return [
                ...currentTodos,
                { id: crypto.randomUUID(), title, completed: false },
            ];
        });
    }

    function toggleTodo(id, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    todo.completed = completed;
                }
                return todo;
            });
        });
    }

    function deleteTodo(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id);
        });
    }

    return (
        <>
            <NewTodoForm onSubmit={addTodo} />
            <h1 className='header'>Todo List</h1>
            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        </>
    );
}
