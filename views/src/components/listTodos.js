import React, { useEffect, useState } from 'react'
import { deleteTodo, getAllTodos } from '../utils'
import { useDispatch } from 'react-redux'
import { editTodo } from '../features/editSlice';

function ListTodo() {
  
//   REDUX STATE SELECTORS
  const dispatch = useDispatch();

// USESTATE HOOKS FOR STORING TODOS
  const [todos, setTodos] = useState([]);

// USEEFFECT HOOK FOR DATA-FETCHING
  useEffect(()=>{
    getAllTodos().then(res=>{
        setTodos(res)
    });
  }, [todos]);

// FUNCTIONS TO USE
  const handleDelete = async (id) => {
     deleteTodo(id);
  }

  return (
    <div className=' flex my-5'>
        <table className=' table-auto md:w-[90vw]'>
            <thead className=' font-extrabold border-y-2'>
                <td key='1' className=''>Description</td>
                <td key='2' className=''>Edit</td>
                <td key='3' className=''>Delete</td>
            </thead>
            <tbody>
                { todos.map(
                    item => {
                        return (
                            <tr key={item.todo_id} className=' border-b-[1px] border-slate-300 h-[5rem]'>
                                <td>{ item.description }</td>
                                <td>
                                    <button
                                       onClick={()=>{
                                        dispatch(editTodo(item))
                                    }} 
                                        className=' bg-[dodgerblue] text-slate-200 p-1 px-4'
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={()=>{
                                            handleDelete(item.todo_id)
                                        }}
                                        className=' bg-[indianred] text-slate-200 p-1 px-2'
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                ) }
            </tbody>
        </table>
    </div>
  )
}

export default ListTodo;