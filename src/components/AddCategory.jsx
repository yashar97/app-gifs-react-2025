import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());
        setinputValue('');

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={e => setinputValue(e.target.value)}
                placeholder='Buscar gifs' />
        </form>
    )
}

export default AddCategory