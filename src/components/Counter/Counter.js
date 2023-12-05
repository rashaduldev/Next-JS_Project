"use client";
import { useState } from 'react';

const Counter = () => {
    const [counter,setCounter]=useState(0);
    return (
        <div>
            <h1>Counter {counter}</h1>
      <button className='btn btn-primary'
      onClick={()=>setCounter(counter+1)}
      >increse</button>
      <button className='btn btn-primary'
      onClick={()=>setCounter(counter-1)}
      >decrese</button>
        </div>
    );
};

export default Counter;