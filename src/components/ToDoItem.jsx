export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <li id='checkbox'>
            <label className='form-check-label'>
                <input
                    className='form-check-input me-1 checkbox'
                    checked={completed} // makes false
                    onChange={e => toggleTodo(id, e.target.checked)}
                    type='checkbox'
                />
                {title}
            </label>
            <button className='btn btn-danger' onClick={() => deleteTodo(id)}>
                Delete
            </button>
        </li>
    );
}
