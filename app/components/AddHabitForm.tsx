"use client"

import { useState } from 'react'

interface AddHabitFormProps {
    onAdd: (habitName: string) => void
    canAdd: boolean
}

export default function AddHabitForm({ onAdd, canAdd }: AddHabitFormProps) {
    const [input, setInput] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (input.trim()) {
            onAdd(input)
            setInput('')
        }
    }

    return (
        <div className="mb-8">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New habit name..."
          disabled={!canAdd}
          className="flex-1 px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all"
        />
        <button
          type="submit"
          disabled={!canAdd}
          className="px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Add Habit
        </button>
      </form>
      {!canAdd && (
        <p className="mt-3 text-sm text-red-600 font-medium">
          ⚠️ Maximum 3 habits reached
        </p>
      )}
    </div>
    )
}