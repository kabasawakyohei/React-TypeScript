import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {Todo} from "./Todo"

// TodoTypeは型になる
type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App(){
  //useStateに対して型を指定してあげる
  const[todos, setTodos] = useState<Array<TodoType>>([]);

  //コンポーネント関数
  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data)
    })
  }

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得処理</button>
      {todos.map((todo: TodoType) => (
        // 子コンポーネントであるTodoにtitleとuseridを渡している。かつTodoコンポーネントを表示している
        // userId={todo.userId}の変数部分左辺を子コンポーネントに渡している
        <Todo title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </div>
  );
}

export default App;
