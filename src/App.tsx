import { Header } from './components/Header'
import { Search } from './components/Search' 
import { Task } from './components/Task'
import { ClipboardText } from 'phosphor-react'
import '../global.css'
import styles from './App.module.css'
import { useEffect, useState } from 'react'

interface Task {
  id: number;
  content: string;
  status: string;
}
function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [doneTasksCount, setDoneTasksCount] = useState(0)

  const onAddTask = (task:Task) => {
    setTasks([...tasks, task])

  }

  const onCheckTask = (id: number) => {
   // Create a new array with updated tasks
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status: task.status === 'done' ? 'open' : 'done' } : task
  ) ;
    // Update the state with the new array
    setTasks(updatedTasks);
  }

  const onDeleteTask = (id: number) => {
    const updateTasksAfterDelete = tasks.filter(task => task.id !== id)
    setTasks(updateTasksAfterDelete)
  }

  const createdTasksCount = tasks.length;


  useEffect(() => {
    const count = tasks.filter(task => task.status === 'done').length;
    setDoneTasksCount(count);
  },[tasks])



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
            <span>{doneTasksCount} out {createdTasksCount}</span>
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
              onDeleteTask={onDeleteTask}
            />

          ))
        }

      </main>
    </>
  )
}

export default App
