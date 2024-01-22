import styles from './Search.module.css'
import { PlusCircle } from 'phosphor-react'
export function Search() {
    return(
        <div className={styles.wrapper}>
            <input className={styles.newTaskInput} type="text" placeholder="Add a new task" />
            <button type="submit" className={styles.createButton}>
                Create
                <PlusCircle />
            </button>
        </div>
    )
}