import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App(){
  //useStateに対して型を指定してあげる
  const[todos, setTodos] = useState<any>{[]};

  //コンポーネント関数
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
    })
  }

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得処理</button>
    </div>
  )
}

export default App;
