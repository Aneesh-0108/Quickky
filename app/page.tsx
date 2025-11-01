"use client"

import { useState } from 'react'
import HabitList from './components/HabitList'
import AddHabitForm from './components/AddHabitForm'


export default function Home() {
  const [habits, setHabits] = useState<string[]>([])

  const addHabit = (habitName: string) => {
    if (habits.length < 3 && habitName.trim()) {
      setHabits([...habits, habitName])

    }
  }

  const toggleHabit = (index: number) => {
    console.log(`Toggled habit ${index}`)

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-white mb-3 drop-shadow-lg">
            ⚡ Quick Habit Tracker
          </h1>
          <p className="text-xl text-white/90">Track up to 3 daily habits</p>
        </header>
        
        <main className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-8">
          <AddHabitForm onAdd={addHabit} canAdd={habits.length < 3} />
          <HabitList habits={habits} onToggle={toggleHabit} />
        </main>
      </div>
    </div>
  )
} 