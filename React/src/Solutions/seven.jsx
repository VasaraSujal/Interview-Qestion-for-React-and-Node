import react, { useState } from 'react';

function Seven() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (email === '' || password === '') {
            setMessage('Please fill in all fields');
        } else {
            setMessage('Form submitted successfully!');
        }
    }

    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>

                <label>Email:</label><br />
                <input
                 type="email"
                 placeholder='email'
                 onChange={(e) => setEmail(e.target.value)} /><br />

                <label>Password:</label><br />
                <input
                 type="password"
                 placeholder='password'
                 onChange={(e) => setPassword(e.target.value)} /><br />
                 
                 <button type='submit'>Submit</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default Seven;