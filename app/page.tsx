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
    <div style={{}}>
      <h1>Quick Habit Tracker</h1>
      <p>Tacks upto 3 daily habits</p>

      <AddHabitForm onAdd={addHabit} canAdd={habits.length < 3} />
      <HabitList habits={habits} onToggle={toggleHabit} />
    </div>
  )
} 