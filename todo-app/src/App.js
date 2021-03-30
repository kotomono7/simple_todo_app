import React, { useState, useEffect } from 'react';
import axios from "./apis";

import Section from './components/Section';
import Form from './components/Form';
import List from './components/List';

const appTitle = 'To-Do App';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function getTodoList() {
      await axios.get("/todos")
        .then(res => {
          setTodoList(res.data);
          console.log(res.data);
        })
        .catch(err => console.error(err));
    }

    getTodoList();
  }, []);

  const addTodo = async (item) => {
    await axios.post("/todos", item)
      .then(res => {
        setTodoList((oldList) => [...oldList, res.data]);
      })
      .catch(err => console.error(err));
  }

  const editTodo = async (id, item) => {
    await axios.put("/todos/" + id, item)
      .then(res => {
        console.log(res.status);
        console.log(res.data);
      })
      .catch(err => console.error(err));
  }

  const removeTodo = async (id) => {
    await axios.delete("/todos/" + id)
      .then(res => {
        setTodoList((oldList) => oldList.filter((item) => item._id !== id));
        console.log(res.status);
      })
      .catch(err => console.error(err));
  }

  return (
    <div className='ui container center aligned'>
      <Section>
        <h1>{appTitle}</h1>
      </Section>
      
      <Section>
        <Form addList={addTodo} />
      </Section>

      <Section>
        <List list={todoList} editList={editTodo} removeList={removeTodo} />
      </Section>
    </div>
  );
}

export default App;
