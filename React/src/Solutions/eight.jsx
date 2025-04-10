import react, { useState } from 'react';

function Eight() {
    const [show, setShow] = useState(false);

    function toggle() {
        if(show) {
            setShow(false);
        }else{
            setShow(true);
        }
    }

    return (
        <div>
            <h3 onClick={toggle} style={{cursor: 'pointer', border: '1px solid blue'}}>
                What is React?
            </h3>
            {show && 
                <p>
                    React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can change data, without reloading the page.
                </p>
            }
        </div>
    )
}

export default Eight;