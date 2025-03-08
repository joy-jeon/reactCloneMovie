import { useState, useEffect } from "react";



function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === '') {
      return
    }
    setToDos((curruentArray) => [toDo, ...curruentArray])
    setToDo('');
  }
  console.log(toDos)
  return (
    <form onSubmit={onSubmit}>
      <h1>My To Do List ({toDos.length})</h1>
      <input
        value={toDo}
        onChange={onChange}
        type="text"
      />
      <button>버튼</button>
    </form>
  )
}

export default App;
