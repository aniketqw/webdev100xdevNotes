'use client';

import React, { useState } from 'react';

interface Todo {
  title: string;
}

export default function TodoApp() {
  // ────────────────────────────────────────────────────────────────────────────
  // State hooks
  // ────────────────────────────────────────────────────────────────────────────

  // Holds the list of todos
  const [todos, setTodos] = useState<Todo[]>([]);
  // Holds current input field value for adding
  const [inputValue, setInputValue] = useState<string>('');

  // Index of the todo currently being edited, or null if none
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  // Holds the temporary edit value while in edit mode
  const [editingValue, setEditingValue] = useState<string>('');

  // ────────────────────────────────────────────────────────────────────────────
  // Action handlers
  // ────────────────────────────────────────────────────────────────────────────

  // Add a new todo if input is not empty
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { title: inputValue }]);
      setInputValue('');
    }
  };

  // Begin editing an existing todo:
  // 1. Record which index is being edited
  // 2. Initialize the editingValue to the current title
  const startEditing = (index: number) => {
    setEditingIndex(index);
    setEditingValue(todos[index].title);
  };

  // Save the edit:
  // 1. Copy todos array
  // 2. Overwrite the title at editingIndex with editingValue
  // 3. Clear editingIndex to exit edit mode
  const saveEdit = () => {
    if (editingIndex === null) return;
    if (editingValue.trim() === '') return; // ignore empty save

    const newTodos = [...todos];
    newTodos[editingIndex] = { title: editingValue };
    setTodos(newTodos);

    setEditingIndex(null);
    setEditingValue('');
  };

  // Cancel the edit without saving
  const cancelEdit = () => {
    setEditingIndex(null);
    setEditingValue('');
  };

  // Remove the first todo
  const deleteFirstTodo = () => {
    if (todos.length > 0) {
      setTodos(todos.slice(1));
      // if we were editing the first, cancel
      if (editingIndex === 0) cancelEdit();
    }
  };

  // Remove the last todo
  const deleteLastTodo = () => {
    if (todos.length > 0) {
      setTodos(todos.slice(0, -1));
      // if we were editing the last, cancel
      if (editingIndex === todos.length - 1) cancelEdit();
    }
  };

  // Remove a specific todo by index
  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
    // if the deleted was before our editingIndex, shift it back
    if (editingIndex !== null) {
      if (index === editingIndex) cancelEdit();
      else if (index < editingIndex) setEditingIndex(editingIndex - 1);
    }
  };

  // Handle Enter/Escape keys when editing
  const handleEditKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') saveEdit();
    if (e.key === 'Escape') cancelEdit();
  };

  // Handle Enter key in add-input field
  const handleAddKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addTodo();
  };

  // ────────────────────────────────────────────────────────────────────────────
  // Render
  // ────────────────────────────────────────────────────────────────────────────

  return (
    <>
      {/* Background gradient full-height */}
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 py-8 px-4 ">
        {/* Center container */}
        <div className="max-w-md mx-auto">
          {/* Card */}
          <div className="bg-white rounded-xl shadow-2xl p-6">
            {/* Title */}
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              ✨ Todo App
            </h2>

            {/* Add-row */}
            <div className="flex gap-2 mb-6">
              {/* Add-input */}
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={handleAddKeyDown}
                placeholder="What needs to be done?"
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              />
              {/* Add-button */}
              <button
                onClick={addTodo}
                className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-semibold"
              >
                Add
              </button>
            </div>

            {/* Delete-first/last row */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={deleteFirstTodo}
                disabled={todos.length === 0}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
              >
                Delete First
              </button>
              <button
                onClick={deleteLastTodo}
                disabled={todos.length === 0}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
              >
                Delete Last
              </button>
            </div>

            {/* Empty state or list */}
            {todos.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <p className="text-lg">No todos yet!</p>
                <p className="text-sm mt-2">Add one above to get started</p>
              </div>
            ) : (
              <div className="space-y-2">
                {todos.map((todo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    {editingIndex === index ? (
                      <>
                        {/* Edit-mode input */}
                        <input
                          type="text"
                          value={editingValue}
                          onChange={e => setEditingValue(e.target.value)}
                          onKeyDown={handleEditKeyDown}
                          autoFocus
                          className="flex-1 px-3 py-1 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        {/* Save & Cancel */}
                        <button
                          onClick={saveEdit}
                          className="ml-2 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="ml-1 px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        {/* View-mode title */}
                        <span className="text-gray-700">{todo.title}</span>
                        <div className="flex items-center gap-1">
                          {/* Edit button */}
                          <button
                            onClick={() => startEditing(index)}
                            className="px-2 py-1 bg-yellow-300 text-gray-800 rounded-lg hover:bg-yellow-400 transition-colors text-sm font-medium"
                          >
                            Edit
                          </button>
                          {/* Delete button */}
                          <button
                            onClick={() => deleteTodo(index)}
                            className="w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 flex items-center justify-center text-sm font-bold"
                          >
                            ×
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Footer count */}
            {todos.length > 0 && (
              <div className="mt-6 text-center text-sm text-gray-500">
                {todos.length} {todos.length === 1 ? 'item' : 'items'} in list
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
