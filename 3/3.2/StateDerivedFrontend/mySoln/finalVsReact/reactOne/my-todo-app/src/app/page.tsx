// src/app/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 space-y-8 text-black">
      {/* ADDED text black to overrie from grey to BLACK */}
      {/* Page title */}
      <h1 className="text-4xl font-bold text-gray-800">Welcome to TodoApp</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
        {/* Card: View‐only Todo */}
        <Link
          href="/noedit"
          className="block p-6 bg-white rounded-xl shadow hover:shadow-md transition"
        >
          <h2 className="text-2xl font-semibold mb-2">View Todos</h2>
          <p className="text-gray-600">
            Navigate to the standard todo list (no inline editing).
          </p>
        </Link>

        {/* Card: Edit‐enabled Todo */}
        <Link
          href="/edit"
          className="block p-6 bg-white rounded-xl shadow hover:shadow-md transition"
        >
          <h2 className="text-2xl font-semibold mb-2">Edit Todos</h2>
          <p className="text-gray-600">
            Navigate to the todo list with inline edit &amp; save functionality.
          </p>
        </Link>
      </div>
    </div>
  );
}
