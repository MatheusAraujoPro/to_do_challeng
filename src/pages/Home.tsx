import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';

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
  const { theme, setTheme } = useTheme();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isDark, setIsDark] = useState<Boolean>(theme === Theme.Default);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty

    if (newTaskTitle !== '') {
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }

      setTasks(oldValue => [...oldValue, data]);
    } 
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists 
    let arr = []
    arr = tasks

    arr.forEach((task) => {
      if (task.id === id) {
        task.done = !task.done
      }
    })

    setTasks([...arr])

  }

  function handleTheme(value: Boolean) {
    value ? setTheme(Theme.Dark) : setTheme(Theme.Default)
    setIsDark(!value)
  }

  function handleRemoveTask(id: number) {
    setTasks(oldValue => oldValue.filter((task =>
      task.id !== id
    )))
  }

  
  return (
    <View style={[
      { height: Dimensions.get('window').height },
      isDark && { backgroundColor: '#1F1F1F' }]}>
        
      <Header
        onChangeTheme={handleTheme}
      />

      <TodoInput
        addTask={handleAddTask}
        isDark={isDark}
      />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
        isDark={isDark}
      />
    </View>
  )
}

