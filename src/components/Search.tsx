import React, { useState } from 'react';
import styles from './Search.module.css';
import { PlusCircle } from 'phosphor-react';

interface Task {
  id: number;
  content: string;
  status: 'done' | 'open'
}

interface SearchProps {
    onAddTask: (newTasks: Task | Task[]) => void; // Ajuste aqui
  }

export function Search({ onAddTask }: SearchProps) {
  const [newTaskText, setNewTaskText] = useState<string>('');

  function handleAddTask() {

      const newTask: Task = {
        id: Date.now(),
        content: newTaskText,
        status: 'open'
      };

      onAddTask(newTask);
      setNewTaskText('');
  }

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.newTaskInput}
        type="text"
        placeholder="Add a new task"
        onChange={(e) => setNewTaskText(e.target.value)}
        value={newTaskText}
      />

      <button type="submit" className={styles.createButton} onClick={handleAddTask}>
        Create
        <PlusCircle />
      </button>
    </div>
  );
}
