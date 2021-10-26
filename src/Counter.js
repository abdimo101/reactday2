import React, {useState} from 'react';
export function Counter(){
    
    const [count, setCount] = useState(0);
    return (
        <div>
        <h2>You have clicked {count} times.</h2>
        <button onClick={() => setCount(count + 1)}>Add by one</button>
        <button onClick={() => setCount(count - 1)}>Delete by one</button>
        </div>
    );
}