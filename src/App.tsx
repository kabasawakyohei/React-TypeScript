import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {Todo} from "./Todo"
import{TodoType} from "./types/todo"
import{Text} from "./Text"
import{UserProfile} from "./UserProfile"
import{User} from "./types/user"
import { UserCard } from './components/UserCard';

function App(){
  //useStateに対して型を指定してあげる
  const[todos, setTodos] = useState<Array<TodoType>>([]);

  //コンポーネント関数
  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data)
    })
  }

  const onClick = () => {

  }
  
  const user: User = {
    name: "かばさわ",
    hobbies: ["サーフィン","卓球"],
  }

  const hoge = {
    id:1,
    name:"きょうへい",
    email:"hoge@hoge.gmail.com",
    address:"hoge"
  }

  return (
    <div className="App">

      <button onClick={onClick}>情報取得用ボタン</button>
      <UserCard
        hoge={hoge}
      />

      <UserProfile
        user={user}
      />

      <Text 
        color="red"
        fontSize="12px" >
          この要素がchildrenになる
      </Text>         
      <button onClick={onClickFetchData}>データ取得処理</button>
      {todos.map((todo: TodoType) => (
        // 子コンポーネントであるTodoにtitleとuseridを渡している。かつTodoコンポーネントを表示している
        // userId={todo.userId}の変数部分左辺を子コンポーネントに渡している
        <Todo
          key={todo.id} 
          title={todo.title} 
          userId={todo.userId}
          completed={todo.completed} />
      ))}
    </div>
  );
}

export default App;
