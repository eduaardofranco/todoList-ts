
import { useState } from 'react';
import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

interface TaskProps {
    taskObj: {
      id: number;
      content: string;
      status: string;
    };
  }
  interface CheckTask {
    onCheckTask: (id: number) => void;
  }

  export function Task({ taskObj, onCheckTask }: { taskObj: TaskProps; onCheckTask: CheckTask }) {
      const [isChecked, setIsChecked] = useState(false)
      
        function handleCheckTask(id: number) {
            setIsChecked(!isChecked);
            onCheckTask(taskObj.id)
        }
    return(
        <>
        <div className={`${styles.taskContianer} ${taskObj.status === 'done' ? styles.doneTask : ''}`}>
            <div className={styles.inputs}>
                <input
                    type="checkbox"
                    id="theTask" 
                    onChange={() => handleCheckTask(taskObj.id)}
                />
                <label htmlFor="theTask" className={styles.labelInput}></label>
            </div>
            <p>{taskObj.content}</p>
            <button className={styles.removeTask}>
                <Trash />
            </button>
        </div>
        </>
    )
}