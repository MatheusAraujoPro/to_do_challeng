import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty

    if (newTaskTitle !== '') {
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }

      setTasks(oldValue => [...oldValue, data]);
    } else{
      //TODO - Send alert tp user if Task's Name was Empty.      
    }
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists 
    let arr = []
    arr = tasks

    arr.forEach((task) =>{
      if(task.id === id){
        task.done = !task.done
      }
    })

    setTasks([...arr])

  }

  function handleRemoveTask(id: number) {     
    setTasks(oldValue => oldValue.filter((task =>
      task.id !== id
    )))   
  } 

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}