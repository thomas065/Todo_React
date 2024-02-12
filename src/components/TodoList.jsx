import { TodoItem } from './ToDoItem';

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className='list-group list'>
            {todos.length === 0 && 'Currently there are No Todos'}{' '}
            {/*Javascript short circuiting, look it up!! */}
            {/*needs an id for react to know which item to delete */}
            {todos.map(todo => {
                return (
                    <TodoItem
                        {...todo} //all the props for todo (id, completed, title)
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        key={todo.id}
                    />
                );
            })}
        </ul>
    );
}
