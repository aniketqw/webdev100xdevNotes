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

  // Holds current input field value
  const [inputValue, setInputValue] = useState<string>('');

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

  // Remove the first todo
  const deleteFirstTodo = () => {
    if (todos.length > 0) {
      setTodos(todos.slice(1));
    }
  };

  // Remove the last todo
  const deleteLastTodo = () => {
    if (todos.length > 0) {
      setTodos(todos.slice(0, -1));
    }
  };

  // Remove a specific todo by index
  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Handle Enter key in input field
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  // ────────────────────────────────────────────────────────────────────────────
  // Render
  // ────────────────────────────────────────────────────────────────────────────

  return (
    <>
      {/*
        Outermost container:
        - min-h-screen: minimum height = 100vh (full viewport)
        - bg-gradient-to-br: gradient background from top-left to bottom-right
        - from-purple-100: start color = light purple
        - to-pink-100: end color = light pink
        - py-8: padding-top & bottom = 2rem
        - px-4: padding-left & right = 1rem
      */}
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 py-8 px-4 text-black">
        {/* ADDED TOPLEVEL text-black TO ENSURE ALL THE DESCENDENT ARE DEFAULT */}
        
        {/*
          Center wrapper:
          - max-w-md: max-width = 28rem
          - mx-auto: horizontal margin auto ➝ centers element
        */}
        <div className="max-w-md mx-auto">
          
          {/*
            Card container:
            - bg-white: background = white
            - rounded-xl: border-radius = 0.75rem
            - shadow-2xl: strong box-shadow for depth
            - p-6: padding = 1.5rem on all sides
          */}
          <div className="bg-white rounded-xl shadow-2xl p-6">
            
            {/*
              Title:
              - text-3xl: font-size = 1.875rem
              - font-bold: font-weight = 700
              - text-center: center-align text
              - text-gray-800: dark gray text color
              - mb-8: margin-bottom = 2rem
            */}
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              ✨ Todo App
            </h2>

            {/*
              Input & Add button row:
              - flex: display flex
              - gap-2: gap between items = 0.5rem
              - mb-6: margin-bottom = 1.5rem
            */}
            <div className="flex gap-2 mb-6">
              
              {/*
                Input field:
                - flex-1: flex-grow = 1 (fills available space)
                - px-4: padding-left & right = 1rem
                - py-2: padding-top & bottom = 0.5rem
                - border-2: border width = 2px
                - border-gray-300: light gray border
                - rounded-lg: border-radius = 0.5rem
                - focus:outline-none: remove default focus outline
                - focus:border-purple-500: purple border on focus
                - transition-colors: smooth transition for color changes
              */}
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="What needs to be done?"
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              />

              {/*
                Add button:
                - px-6: padding-left & right = 1.5rem
                - py-2: padding-top & bottom = 0.5rem
                - bg-purple-500: purple background
                - text-white: white text
                - rounded-lg: border-radius = 0.5rem
                - hover:bg-purple-600: darker purple on hover
                - transition-colors: smooth transition for hover
                - font-semibold: font-weight = 600
              */}
              <button
                onClick={addTodo}
                className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-semibold"
              >
                Add
              </button>
            </div>

            {/*
              Delete First & Delete Last buttons row:
              - flex: display flex
              - gap-2: gap = 0.5rem
              - mb-6: margin-bottom = 1.5rem
            */}
            <div className="flex gap-2 mb-6">
              
              {/*
                Delete First:
                - flex-1: fills equal space
                - px-4 py-2: padding = 1rem & 0.5rem
                - bg-gray-100: very light gray background
                - text-gray-700: dark gray text
                - rounded-lg: border-radius = 0.5rem
                - hover:bg-gray-200: slightly darker on hover
                - disabled:opacity-50: 50% opacity when disabled
                - disabled:cursor-not-allowed: not-allowed cursor when disabled
                - transition-colors: smooth color transition
                - text-sm: font-size = 0.875rem
                - font-medium: font-weight = 500
              */}
              <button
                onClick={deleteFirstTodo}
                disabled={todos.length === 0}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
              >
                Delete First
              </button>

              {/*
                Delete Last: same styling as Delete First
              */}
              <button
                onClick={deleteLastTodo}
                disabled={todos.length === 0}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
              >
                Delete Last
              </button>
            </div>

            {todos.length === 0 ? (
              <>
                {/*
                  Empty state message:
                  - text-center: center text
                  - py-12: padding-top & bottom = 3rem
                  - text-gray-400: medium-light gray text
                */}
                <div className="text-center py-12 text-gray-400">
                  {/* text-lg: font-size = 1.125rem */}
                  <p className="text-lg">No todos yet!</p>
                  {/* text-sm: font-size = 0.875rem; mt-2: margin-top = 0.5rem */}
                  <p className="text-sm mt-2">Add one above to get started</p>
                </div>
              </>
            ) : (
              <>
                {/*
                  Todo list container:
                  - space-y-2: vertical spacing between items = 0.5rem
                */}
                <div className="space-y-2">
                  {todos.map((todo, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      {/*
                        Todo text:
                        - text-gray-700: dark gray text
                      */}
                      <span className="text-gray-700">{todo.title}</span>

                      {/*
                        Delete icon button:
                        - w-8 h-8: width & height = 2rem
                        - bg-red-500: red background
                        - text-white: white icon
                        - rounded-full: circle shape
                        - hover:bg-red-600: darker red on hover
                        - transition-colors: smooth transition
                        - opacity-0: hidden by default
                        - group-hover:opacity-100 & focus:opacity-100: show on parent hover or focus
                        - flex items-center justify-center: center the “×”
                        - text-sm: font-size = 0.875rem
                        - font-bold: font-weight = 700
                      */}
                      <button
                        onClick={() => deleteTodo(index)}
                        className="w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 flex items-center justify-center text-sm font-bold"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}

            {todos.length > 0 && (
              <>
                {/*
                  Footer count:
                  - mt-6: margin-top = 1.5rem
                  - text-center: center text
                  - text-sm: font-size = 0.875rem
                  - text-gray-500: medium gray text
                */}
                <div className="mt-6 text-center text-sm text-gray-500">
                  {todos.length} {todos.length === 1 ? 'item' : 'items'} in list
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
