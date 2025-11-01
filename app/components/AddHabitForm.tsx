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
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="New habit name..."
                disabled={!canAdd}
                style={{ padding: '8px', marginRight: '8px', width: '300px' }}
            />
            <button type="submit" disabled={!canAdd} style={{ padding: '8px 16px' }}>
                Add Habit
            </button>
            {!canAdd && <p style={{ color: 'red' }}>Maximum 3 habits reached</p>}


        </form>
    )
}