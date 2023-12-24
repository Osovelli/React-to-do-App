import React, { useState } from 'react'
import { createTodo } from '../utils';

function InputTodo() {

    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(todo);
        setTodo('')
    }

  return (
    <div className=''>
        <h1 className=' text-4xl sm:text-6xl'>Input Todos</h1>

        <form method='POST' onSubmit={handleSubmit} className=' flex flex-nowrap items-stretch md:mx-10 my-9 md:w-[90vw]'>
            <input type='text' placeholder='enter todo' value={todo} onChange={e=>setTodo(e.target.value)} className='opacity-70 w-4/5'/>
            <button type='submit' className=' bg-green-400 p-2 w-1/5'>Create</button>
        </form>
    </div>
  )
};

export default InputTodo