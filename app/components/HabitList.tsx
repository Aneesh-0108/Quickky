"use client"

interface HabitListProps {
    habits: string[]
    onToggle: (index: number) => void
}

export default function HabitList({ habits, onToggle }: HabitListProps) {
    if (habits.length == 0) {
        return <p style={{ color: '#999' }}>No habits added yet. Add one above!</p>
    }

    return (
        <div>
            {habits.map((habit, index) => (
                <div
                    key={index}
                    onClick={() => onToggle(index)}
                    style={{
                        padding: '16px',
                        marginBottom: '8px',
                        border: '1px solid #ddd',
                        cursor: 'pointer'
                    }}
                >
                    <h3>{habit}</h3>
                </div>
            ))}
        </div>
    )
}