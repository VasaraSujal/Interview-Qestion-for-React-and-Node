import react, { useState } from 'react';

function Five() {
    const [text, setText] = useState('');
    const names = ['Sujal', 'Jatin', 'Kalp', 'Prem', 'Arya'];

    const result = names.filter((name) => {
        return name.toLowerCase().includes(text.toLowerCase());
    });

    return (
        <div>
            <input type="text" 
             placeholder="Search Name"
             onChange={(e) => setText(e.target.value)} />
            <ul>
                {result.map((name, index) => {
                    return <li key={index}>{name}</li>;
                })}
            </ul>
        </div>
    )
}

export default Five;