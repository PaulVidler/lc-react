import React from 'react'

const TodoForm = () => {
    return (
        <form action="#" onSubmit={addTodo}>
          <input
            type="text"
            value={todoInput}
            onChange={handleInput}
            className="todo-input"
            placeholder="What do you need to do?"
          />
        </form>
    )
}

export default TodoForm

