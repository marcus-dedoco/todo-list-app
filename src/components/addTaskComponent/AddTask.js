import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please key in a task');
            return;
        }

        onAdd({ text });

        setText('');
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type='text' placeholder='What do you need to do?' onChange={(e) => setText(e.target.value)} />
                <input type='submit' value='Add Task' />
            </div>
        </form>
    )
}

export default AddTask
