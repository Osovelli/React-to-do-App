import React, { useState } from 'react'
import { updateTodo } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from '../features/editSlice';

// import { BsX } from 'react-icons/bs'

function EditTodo() {
  // REDUX SELECTORS
  const todo = useSelector(state=>state.editModal.todo);
  const openEditModal = useSelector(state=>state.editModal.edit);

  const dispatch = useDispatch();

  const [description, setDescription] = useState(todo.description);

  const handleEdit = async (e) => {
      e.preventDefault()
      await updateTodo(todo.todo_id, description);
      setDescription('');
      dispatch(editTodo());
  };

  return (
    <>
    { openEditModal ?

        <div>
            <div className=' top-0 bottom-0 left-0 right-0 absolute bg-slate-900 opacity-80'
              onClick={()=>{ dispatch(editTodo()) }}
            ></div>
            <div className='absolute top-1/2 -translate-y-1/2 bg-slate-300 p-3 sm:p-10'>
              <h1 className=' text-xl font-semibold'>Edit Todo</h1>

              <div className='absolute right-2 top-0 text-xl cursor-pointer'
                onClick={()=>{ dispatch(editTodo()) }}
              >
                X
              </div>

              <div className=' bg-slate-500 h-[0.5px] w-full mb-4'></div>

              <div className=''>
                  <form method='PUT' onSubmit={handleEdit} className='flex items-stretch'>
                      <input type='text' value={description} onChange={e=>setDescription(e.target.value)}/>
                      <button type='submit' className=' bg-[dodgerblue] text-slate-200 p-1 px-4'>Edit</button>
                  </form>
              </div>
            </div>
        </div>

    : '' }
    </>
  )
}

export default EditTodo