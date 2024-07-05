import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div className="counter">
            <h2>Counter: {count}</h2>
            <button
                onClick={incrementCount}
                style={{ backgroundColor: count > 10 ? 'red' : 'green' }}
            >
                Increment
            </button>
        </div>
    );
};

export default Counter;
