import { Header } from './components/Header'
import { Search } from './components/Search' 
import { Task } from './components/Task'
import { ClipboardText } from 'phosphor-react'
import '../global.css'
import styles from './App.module.css'
import { useState } from 'react'

interface Task {
  id: number;
  content: string;
  status: string;
}
function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const onAddTask = (task:Task) => {
    console.log([...tasks, task])

    setTasks([...tasks, task])

  }

  const onCheckTask = (id: number) => {
   // Create a new array with updated tasks
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status: 'done' } : task
  ) ;

    // Update the state with the new array
    setTasks(updatedTasks);
    console.log([...tasks, updatedTasks])
    // console.log([...tasks, tasks])


  }

  const createdTasksCount = tasks.length;

  return (
    <>
      <Header />
      <main>
        <Search
          onAddTask={onAddTask}
        />
        <header className={styles.tasksHeader}>
          <p className={styles.createdTasks}>
            Created Tasks
            <span>{createdTasksCount}</span>
          </p>
          <p className={styles.doneTasks}>Done
            <span>1 out {createdTasksCount}</span>
          </p>
        </header>
        <div className={styles.tasksWrapper} >
          <div className={styles.noTasks}>
            <ClipboardText />
            <h3>You do not have created tasks yet</h3>
            <p>Create tasks and organize your items to do</p>
          </div>
        </div>
        {
          tasks && tasks.map(task => (
            <Task
              key={task.id}
              taskObj={task}
              onCheckTask={onCheckTask}
            />

          ))
        }

      </main>
    </>
  )
}

export default App
