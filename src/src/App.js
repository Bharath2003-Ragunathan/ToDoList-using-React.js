import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Listgenerate from './List generate';
import { useState } from 'react';
import AddTask from './AddTask';

function App() {

  const [todoList,settodoList] = useState([
    {task:"learn react.js",complete:false},
    {task:"learn java script",complete:false},
    {task:"learn Angular.js",complete:false},
    {task:"Plugin",complete:false}

    
  ])
   

  function ClaerCompleted(){
    let mapped = todoList.filter((todo =>{
      return ( !todo.complete
      )
    }))
    settodoList(mapped);
  }

  function handletoggle(index){
   let mapped =  todoList.map((todo,i) => {
      return i == index ? {...todo,complete:!todo.complete}:todo
    })
    settodoList(mapped)
  }

  function addTask(input){
    let copy = [...todoList,{ task: input,complete:false}];
    settodoList(copy)
  }
  
  return (
    <div className="App">
      <Header/>
      <Listgenerate listgenerate= {todoList} handletoggle={handletoggle} ClaerCompleted={ClaerCompleted}/>
      <AddTask addTask={addTask} />
    </div>
  );
}

export default App;
