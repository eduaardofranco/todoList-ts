
import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

interface Task {
    content: string;
}
export function Task({ content}: Task) {
    return(
        <>
        <div className={styles.taskContianer}>
            <div className={styles.inputs}>
                <input type="checkbox" id="theTask"  />
                <label htmlFor="theTask" className={styles.labelInput}></label>
            </div>
            <p>{content}</p>
            <button className={styles.removeTask}>
                <Trash />
            </button>
        </div>
        </>
    )
}