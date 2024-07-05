import React, { useState } from 'react';

const Form = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Input value:', inputValue);
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>
                    Enter something:
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
