import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import { useTheme, Theme } from '../configurations/Context';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const {theme, setTheme} = useTheme()

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

  function handleTheme(value: Boolean){
   value ? setTheme(Theme.Dark): setTheme(Theme.Default)
   console.log('O tema escolhid o foi:', theme);
   
   
  }

  function handleRemoveTask(id: number) {     
    setTasks(oldValue => oldValue.filter((task =>
      task.id !== id
    )))   
  } 

  return (
    <>
      <Header
        onChangeTheme={handleTheme}
      />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}