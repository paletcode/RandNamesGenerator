import { useState } from 'react';
import React from 'react';

export default function RandName() {
  names = ["John", "Peter", "Chris", "Paul", "David"]
  const [name, setName] = useState(names[Math.floor(Math.random() * names.length)])
  
  return (
    <div className='App'>
      <p>My name is {name}</p>
      <div>
        <button onClick={() => setName(names[Math.floor(Math.random() * names.length)])}>Random Names</button>
        
      </div>
    </div>
  );
}
