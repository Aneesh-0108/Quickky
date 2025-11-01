"use client"

interface HabitListProps {
    habits: string[]
    onToggle: (index: number) => void
}

export default function HabitList({ habits, onToggle }: HabitListProps) {
    if (habits.length == 0) {
        return (<div className="text-center py-12">
        <p className="text-gray-400 text-lg">
          📝 No habits yet. Add one above!
        </p>
      </div>
        ) 
}

    return (
        <div className="space-y-3">
      {habits.map((habit, index) => (
        <div
          key={index}
          onClick={() => onToggle(index)}
          className="group p-5 bg-linear-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-100 hover:border-purple-300 cursor-pointer transition-all hover:shadow-md transform hover:-translate-y-1"
        >
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">
            {habit}
          </h3>
          <p className="text-xs text-gray-500 mt-1">Click to mark complete</p>
        </div>
      ))}
    </div>
    )
}