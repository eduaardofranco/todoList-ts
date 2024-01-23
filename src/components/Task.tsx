
import { useState } from 'react';
import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

interface TaskProps {
    taskObj: {
        id: number;
        content: string;
        status: string;
    };
    onCheckTask: (id: number) => void;
    onDeleteTask: (id: number) => void;
}

  export function Task({ taskObj, onCheckTask, onDeleteTask }: TaskProps) {
      const [isChecked, setIsChecked] = useState(false)
      
        function handleCheckTask(id: number) {
            setIsChecked(!isChecked);
            onCheckTask(taskObj.id)
        }
        function deleteTask(id: number) {
            onDeleteTask(id)
        }
    return(
        <>
        <div className={`${styles.taskContianer} ${taskObj.status === 'done' ? styles.doneTask : ''}`}>
            <div className={styles.inputs}>
                <input
                    type="checkbox"
                    onChange={() => handleCheckTask(taskObj.id)}
                />
                <label className={styles.labelInput}></label>
            </div>
            <p>{taskObj.content}</p>
            <button
                className={styles.removeTask}
                onClick={() => deleteTask(taskObj.id)}
            >
                <Trash />
            </button>
        </div>
        </>
    )
}