import { Header } from './components/Header'
import { Search } from './components/Search' 
import { Task } from './components/Task'
import { ClipboardText } from 'phosphor-react'
import '../global.css'
import styles from './App.module.css'


function App() {

  return (
    <>
      <Header />
      <main>
        <Search />
        <header className={styles.tasksHeader}>
          <p className={styles.createdTasks}>
            Created Tasks
            <span>5</span>
          </p>
          <p className={styles.doneTasks}>Done
            <span>1 out 5</span>
          </p>
        </header>
        <div className={styles.tasksWrapper} >
          <div className={styles.noTasks}>
            <ClipboardText />
            <h3>You do not have created tasks yet</h3>
            <p>Create tasks and organize your items to do</p>
          </div>
        </div>
        <Task
          content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Integer urna interdum massa libero auctor"
        />

      </main>
    </>
  )
}

export default App
