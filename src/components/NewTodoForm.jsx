import { useState } from 'react';

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState(""); // use empty string because it is just one item at a time upon enter

    function handleSubmit(params) {
        params.preventDefault(); // prevents the page from refreshing, add onSubmit function to form

        if (newItem === "") return;

        onSubmit(newItem);

        setNewItem(""); // sets new item after entered to blank
    }

    return (
        <form onSubmit={handleSubmit} className='new-item-form'>
            <div className='form-row'>
                <label htmlFor='item'>New Item</label>
                <input
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type='text'
                    id='item'
                />
                <button className='btn'>Add</button>
            </div>
        </form>
    );
}
