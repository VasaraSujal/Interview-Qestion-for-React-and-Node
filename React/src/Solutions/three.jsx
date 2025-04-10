import React, { useState } from 'react';

function Three() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>Hello World</p>}
    </div>
  );
}

export default Three;
