'use client'

import { useEffect, useState } from 'react'

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const handleAddTodo = async (event) => {
    event.preventDefault()

    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newTodo }),
    })

    const todo = await response.json()

    setTodos([...todos, todo])
    setNewTodo('')
  }

  const handleRemoveTodo = async (id) => {
    await fetch('/api/todos', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })

    setTodos(todos.filter((todo) => todo.id !== id))
  }

  useEffect(() => {
    fetch('/api/todos')
      .then((response) => response.json())
      .then(setTodos)
  }, [])

  return (
    <div className="bg-gray-800 text-white p-5 max-w-md mx-auto rounded-lg mt-10">
      <h2 className="text-xl font-bold mb-4">To-Do List</h2>

      <form onSubmit={handleAddTodo} className="mb-4">
        <input
          className="text-gray-900 p-2 mr-2 rounded bg-white"
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          placeholder="Add a new task"
        />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Add Task
        </button>
      </form>

      <ul data-id="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center mb-2">
            <span>{todo.text}</span>

            <button
              data-id={`todo-${todo.id}-remove-btn`}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
              onClick={() => handleRemoveTodo(todo.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
