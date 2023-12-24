import './App.css';
import EditTodo from './components/editTodos';
import InputTodo from './components/inputTodo';
import ListTodo from './components/listTodos';

function App() {
  return (
    <div className="App">
        <div className=''>
            <InputTodo />
            <ListTodo />
            <EditTodo />
        </div>
    </div>
  );
}

export default App;
