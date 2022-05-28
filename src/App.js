import { TodoList } from './components/TodoList';
import './App.css';
// import  Todo  from './components/Todo';
import ToDo from './components/ToDo';
import { useState } from 'react';


const data = [

]
function App() {
    const [state, setState] = useState(data)
   

const onData = (text) => {
    setState((prev)=>{
      return [...prev, text]
    })
}


  return (
    <div className="App">
       <ToDo onData = {onData} />
       <TodoList data = {state} />
    </div>
  );
}

export default App;
