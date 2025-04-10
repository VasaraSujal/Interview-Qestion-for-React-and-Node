import react, { useState } from 'react';

function Nine() {
    const [dark, setDark] = useState(false);

    function ToggleTheme() {
        if(dark) {
            setDark(false);
        }else{
            setDark(true);
        }
    }

    const Pagestyle = {
        backgroundColor: dark ? '#333' : '#fff',
        color: dark ? '#fff' : '#000',
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center'
    };
    
    return (
        <div style={Pagestyle}>
            <h1>Toggle Theme</h1>
            <button onClick={ToggleTheme}>
                {dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        </div>
    )
}

export default Nine;